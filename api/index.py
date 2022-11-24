from sanic import Sanic
from .api import bp


app = Sanic(name="app")
app.blueprint(bp)
