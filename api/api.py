import base64
import os
from json import dumps

import requests
from sanic import Blueprint
from sanic.response import empty, json

MAILGUN_KEY = os.environ.get("MAILGUN_KEY", "")
CAPTCHA_ENABLED = os.environ.get("CAPTCHA_ENABLED", False)

bp = Blueprint("api", url_prefix="/api")


@bp.options("/messages")
async def preflight(_req, _path=""):
    return empty()

@bp.post("/messages")
async def message(req):
    fields = ["feedback", "url", "who", "from", "details"]

    if CAPTCHA_ENABLED:
      captcha = req.json.get("captcha", "")

      res = requests.post(
          f"https://www.google.com/recaptcha/api/siteverify",
          data={"secret": os.environ.get("CAPTCHA_KEY", ""), "response": captcha},
      )
      if res.status_code != 200 or not res.json().get("success"):
          return json(res.json(), status=res.status_code)

    feedback = req.json.get('feedback', '')
    if not feedback in ['+', '-']:
      return json({"message": "Invalid feedback field"}, status=422)

    icon = {'+': '👍', '-': '👎'}[feedback]
    # escaped = {k: html.escape(req.json.get(k, '-')) for k in fields}
    escaped = {k: req.json.get(k, '-') for k in fields}

    body = f"""
    <p>
      Feedback per {escaped['url']}</a>
    </p>
    <dl>
      <dt><strong>Questa pagina ti è stata utile?</strong></dt>
      <dd>{icon}</dd>

      <dt><strong>Sono</strong></dt>
      <dd>{escaped['who']}</dd>

      <dt><strong>Ho trovato questa pagina grazie a</strong></dt>
      <dd>{escaped['from']}</dd>

      <dt><strong>Come possiamo migliorare questa pagina</strong></dt>
      <dd>{escaped['details']}</dd>
    </dl>
    """

    res = requests.post(
        "https://api.eu.mailgun.net/v3/designers.italia.it/messages",
        auth=("api", MAILGUN_KEY),
        data={
            "from": "no-reply@designers.italia.it",
            "to": "fabio.bonelli@teamdigitale.governo.it,daniele.tabellini@teamdigitale.governo.it,andrea.stagi@teamdigitale.governo.it",
            "subject": f"{icon} Feedback dal sito designers.italia.it",
            "html": body,
            "h:X-Serialized": base64.b64encode(dumps({k: req.json.get(k, "") for k in fields}).encode('utf-8')),
        },
    )
    if res.status_code != 200:
        try:
          return json(res.json(), status=res.status_code)
        except requests.exceptions.JSONDecodeError:
          return json({"message": res.text}, status=res.status_code)

    return json({"message": "ok"})
