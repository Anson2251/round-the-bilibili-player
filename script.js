// ==UserScript==
// @name         Round the bilibili player
// @namespace    http://tampermonkey.net/
// @version      2024-07-16
// @description  Video round coner
// @author       You
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement("style");
    style.innerHTML = `
        #bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-video-perch > div > video, .bpx-player-video-area {
            border-radius: 8px;
        }

        .bpx-player-video-area {
            box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3), 0px 0px 2px rgba(0, 0, 0, 0.7);
            border: 1px solid rgba(128, 128, 128, 0.3);
        }

        .bpx-player-sending-bar {
            border-radius: 8px;
            border: 1px solid rgba(128, 128, 128, 0.1);
            margin-top: 12px;

            box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .bpx-player-sending-area:before {
            visibility: hidden;
        }

        #bilibili-player-placeholder {
            visibility: hidden;
        }
    `;

    document.body.appendChild(style);
})();
