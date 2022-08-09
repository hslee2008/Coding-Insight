import React, { useState } from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./styles.module.scss";
export default function PwaReloadPopup({ onReload }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className={clsx("alert", "alert--secondary", styles.popup)}>
        <p>
          <Translate
            id="theme.PwaReloadPopup.info"
            description="The text for PWA reload popup"
          >
            New version available.
          </Translate>
        </p>
        <div className={styles.buttonContainer}>
          <button
            className="button button--link"
            onClick={() => {
              setIsVisible(false);
              onReload();
            }}
          >
            <Translate
              id="theme.PwaReloadPopup.refreshButtonText"
              description="The text for PWA reload button"
            >
              Refresh
            </Translate>
          </button>

          <button
            aria-label={translate({
              id: "theme.PwaReloadPopup.closeButtonAriaLabel",
              message: "Close",
              description:
                "The ARIA label for close button of PWA reload popup",
            })}
            className="close"
            onClick={() => setIsVisible(false)}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    )
  );
}
