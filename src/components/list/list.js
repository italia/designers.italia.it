import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Notification } from "bootstrap-italia";
import Icon from "../icon/icon";
import ListItem from "../list-item/list-item";
import Link from "../link/link";
import "./list.scss";

const List = React.forwardRef(
  (
    {
      isMenu, // is list inside nav menu: true or false
      isShare, // is list a share: true or false
      collapsable, // true / false
      isDropdown, // if inside dropdown
      id,
      title,
      headingLevel,
      textLarge,
      children,
      customStyle,
      customStyleUl,
      heading, // if has heading
      headingLink, // if heading has link
      listItems,
      simpleList,
      shareUrl,
      shareTitle,
    },
    ref,
  ) => {
    const [currentUrl, setCurrentUrl] = useState("");
    const [currentTitle, setCurrentTitle] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const notificationRef = useRef(null);

    const ICON_ARROW_RIGHT_TRIANGLE = {
      icon: "sprites.svg#it-arrow-right-triangle",
      size: "sm",
      color: "primary",
      addonClasses: "align-middle me-2",
      // ariaLabel: ""
    };

    useEffect(() => {
      const url = shareUrl
        ? new URL(shareUrl, window.location.href).toString()
        : window.location.href;

      setCurrentUrl(url);
      setCurrentTitle(shareTitle);
    }, [shareUrl, shareTitle]);

    useEffect(() => setIsMounted(true), []);

    // heading level
    let HLevel;
    if (headingLevel) {
      HLevel = `h${headingLevel}`;
    } else {
      HLevel = `h3`;
    }

    const styles =
      `${isMenu ? "link-list-wrapper" : "it-list-wrapper"}` +
      `${collapsable ? " collapse" : ""}` +
      `${customStyle ? ` ${customStyle}` : ""}`;

    const ulStyles =
      `${isMenu ? "link-list" : "it-list"}` +
      `${customStyleUl ? ` ${customStyleUl}` : ""}`;

    if (isShare) {
      const iconProps = { color: "primary", size: "sm" };
      const iconShareProps = { color: "white", addonClasses: "ms-1" };
      const onCopyLink = async (e) => {
        e?.preventDefault();
        await navigator.clipboard.writeText(currentUrl);
        if (notificationRef.current) {
          const notification = new Notification(notificationRef.current, {
            timeout: 3000,
          });
          notification.show();
        }
      };

      // eslint-disable-next-line no-param-reassign
      children = (
        <>
          <ListItem
            label="Condividi su WhatsApp"
            icon={{ icon: "sprites.svg#it-whatsapp", ...iconProps }}
            iconRight
            isDropdown={isDropdown}
            textLarge={textLarge}
            simpleList={simpleList}
            ariaLabel="Condividi su WhatsApp (si apre in una nuova finestra)"
            url={`https://wa.me/?text=${encodeURIComponent(
              currentTitle,
            )}%20${encodeURIComponent(currentUrl)}`}
            blank="true"
          />
          <ListItem
            label="Condividi su Telegram"
            icon={{ icon: "sprites.svg#it-telegram", ...iconProps }}
            iconRight
            isDropdown={isDropdown}
            textLarge={textLarge}
            simpleList={simpleList}
            ariaLabel="Condividi su Telegram (si apre in una nuova finestra)"
            url={`https://t.me/share/url?url=${encodeURIComponent(
              currentUrl,
            )}&text=${encodeURIComponent(currentTitle)}`}
            blank="true"
          />
          <ListItem
            label="Condividi su LinkedIn"
            icon={{ icon: "sprites.svg#it-linkedin", ...iconProps }}
            iconRight
            isDropdown={isDropdown}
            textLarge={textLarge}
            simpleList={simpleList}
            ariaLabel="Condividi su LinkedIn (si apre in una nuova finestra)"
            url={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              currentUrl,
            )}`}
            blank="true"
          />
          <ListItem
            label="Copia collegamento"
            icon={{ icon: "sprites.svg#it-copy", ...iconShareProps }}
            iconRight
            isDropdown={isDropdown}
            textLarge={textLarge}
            simpleList={simpleList}
            ariaLabel=""
            onClick={onCopyLink}
          />
        </>
      );
    }

    if (listItems) {
      if (isMenu) {
        // megamenu
        // eslint-disable-next-line no-param-reassign
        children = listItems.map((listitems, index) => (
          <ListItem
            {...listitems}
            key={`z-list-${index}`}
            isDropdown={isDropdown}
            textLarge={textLarge}
            simpleList={simpleList}
            icon={ICON_ARROW_RIGHT_TRIANGLE}
            iconLeft
          />
        ));
      } else {
        // eslint-disable-next-line no-param-reassign
        children = listItems.map((listitems, index) => (
          <ListItem
            {...listitems}
            key={`z-list-${index}`}
            isDropdown={isDropdown}
            textLarge={textLarge}
            simpleList={simpleList}
          />
        ));
      }
    }

    let ListHeading;
    if (heading) {
      ListHeading = <div className="link-list-heading">{heading}</div>;
      if (headingLink) {
        ListHeading = (
          <div className="link-list-heading">
            <Link to={headingLink}>{heading}</Link>
          </div>
        );
      }
    }

    return (
      <div ref={ref} className={styles} id={id}>
        {ListHeading}
        {title && <HLevel className="title h4 mb-0">{title}</HLevel>}
        <ul className={ulStyles}>{children}</ul>
        {isShare &&
          isMounted &&
          ReactDOM.createPortal(
            <div
              className="notification with-icon right-fix success dismissable fade"
              role="alert"
              ref={notificationRef}
            >
              <span className="h5">
                <Icon icon="sprites.svg#it-check-circle" />
                Collegamento copiato negli appunti
              </span>
            </div>,
            document.body,
          )}
      </div>
    );
  },
);

export default List;
