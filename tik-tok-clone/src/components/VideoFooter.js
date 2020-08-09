import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@thePROZACH</h3>
        <p>this is a description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon"/>
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>YOOO!! Whats up guys!!!</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://icon2.cleanpng.com/20180401/bhw/kisspng-phonograph-record-lp-record-vinyl-5ac18ac667b354.6841003715226334144248.jpg"
      />
    </div>
  );
}

export default VideoFooter;
