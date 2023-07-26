(function(){
    var script = {
 "definitions": [{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_824E043C_93D2_AABD_41B7_00DAA66A8F6B.ogg",
  "mp3Url": "media/audio_824E043C_93D2_AABD_41B7_00DAA66A8F6B.mp3",
  "class": "AudioResource"
 },
 "id": "audio_824E043C_93D2_AABD_41B7_00DAA66A8F6B",
 "class": "MediaAudio",
 "data": {
  "label": "voz_final"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -5.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_864B2140_93BF_6AC6_41DE_A6B4A263B0F8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.69,
   "yaw": 5.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD"
  }
 ],
 "hfovMin": "135%",
 "audios": [
  "this.audio_9EB66FD5_93B3_55CF_41E0_954EDFC147BA"
 ],
 "hfov": 360,
 "label": "captura1",
 "id": "panorama_82EA44DC_8847_0947_41D4_41044F06A453",
 "thumbnailUrl": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_86A330F5_93BF_6BCF_41E0_4707DAAB0833",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_82EA44DC_8847_0947_41D4_41044F06A453_ccap0",
  "this.panorama_82EA44DC_8847_0947_41D4_41044F06A453_tcap0",
  "this.overlay_83EA3573_8E9B_0EAF_41DA_ED94F508B454",
  "this.overlay_83E6B89A_8E9D_0799_41C1_1427954D704C",
  "this.overlay_9EA55FF2_8EA5_19A9_41DC_1AE3118DD544",
  "this.overlay_9E1A86D6_8EA5_0BE9_41E0_7270ACC2C221",
  "this.popup_83063FDF_93B1_55FA_41A1_41D15EE2F752",
  "this.popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312",
  "this.overlay_832014A4_93B3_AA4D_41A3_1AF40E28F4ED"
 ]
},
{
 "hideDuration": 500,
 "id": "popup_83480682_93D1_5645_41D1_3BF25FC9746A",
 "hfov": 5.4,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_83480682_93D1_5645_41D1_3BF25FC9746A_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_83480682_93D1_5645_41D1_3BF25FC9746A_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationY": 0,
 "yaw": 105.19,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "pitch": 21.29,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_839C0DFC_93D2_D5BD_41CC_F65F44DD2B19.ogg",
  "mp3Url": "media/audio_839C0DFC_93D2_D5BD_41CC_F65F44DD2B19.mp3",
  "class": "AudioResource"
 },
 "id": "audio_839C0DFC_93D2_D5BD_41CC_F65F44DD2B19",
 "class": "MediaAudio",
 "data": {
  "label": "voz_escalera"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_86071177_93BF_6ACA_41CC_ADF157F27339",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8225E7D2_8840_F743_41C4_E13975773E72_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 1,
 "automaticRotationSpeed": 10,
 "id": "media_9C0D1D96_93D3_DA4D_41D7_4FAE68F33A85_camera",
 "class": "RotationalCamera",
 "manualRotationSpeed": 1800,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "RotationalCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -6.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85F6C181_93BF_6A47_4196_28611DFABCBB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "children": [
  {
   "label": "captura1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "captura2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "captura3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "captura4",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "captura5",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "captura6",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "captura7",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "con obstaculo",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "label": "Media",
 "id": "Menu_86A330F5_93BF_6BCF_41E0_4707DAAB0833",
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "selectedFontColor": "#FFFFFF",
 "opacity": 0.4,
 "rollOverBackgroundColor": "#000000",
 "class": "Menu",
 "rollOverOpacity": 0.8,
 "fontColor": "#FFFFFF"
},
{
 "class": "ImageResource",
 "id": "ImageResource_86968109_93BF_6A46_41B5_AE54411457CB"
},
{
 "class": "ImageResource",
 "id": "ImageResource_86925101_93BF_6A46_41CA_5B0CE359929B"
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "media": "this.panorama_82EA44DC_8847_0947_41D4_41044F06A453",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_82EA44DC_8847_0947_41D4_41044F06A453_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8225E7D2_8840_F743_41C4_E13975773E72",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_8225E7D2_8840_F743_41C4_E13975773E72_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8232FEDA_8840_F943_41C1_A07746163657",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_8232FEDA_8840_F943_41C1_A07746163657_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8224260A_8841_08C3_41C8_DF725C76A489",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_8224260A_8841_08C3_41C8_DF725C76A489_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82359D2B_8841_18C1_41D0_3B20129A6C10",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.media_9C0D1D96_93D3_DA4D_41D7_4FAE68F33A85",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 7, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 7)",
   "camera": "this.media_9C0D1D96_93D3_DA4D_41D7_4FAE68F33A85_camera",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "Video360PlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "ImageResource",
 "id": "ImageResource_86896109_93BF_6A46_41DE_EFAA216669BE"
},
{
 "hfovMin": 60,
 "partial": false,
 "id": "media_9C0D1D96_93D3_DA4D_41D7_4FAE68F33A85",
 "thumbnailUrl": "media/media_9C0D1D96_93D3_DA4D_41D7_4FAE68F33A85_t.jpg",
 "hfov": 360,
 "label": "con obstaculo",
 "loop": false,
 "cardboardMenu": "this.Menu_86A330F5_93BF_6BCF_41E0_4707DAAB0833",
 "pitch": 0,
 "class": "Video360",
 "hfovMax": 140,
 "vfov": 180,
 "video": [
  {
   "width": 2160,
   "url": "media/media_9C0D1D96_93D3_DA4D_41D7_4FAE68F33A85.m3u8",
   "framerate": 50,
   "bitrate": 8748,
   "type": "application/x-mpegurl",
   "posterURL": "media/media_9C0D1D96_93D3_DA4D_41D7_4FAE68F33A85_poster.jpg",
   "class": "Video360Resource",
   "height": 1080
  },
  {
   "width": 2160,
   "url": "media/media_9C0D1D96_93D3_DA4D_41D7_4FAE68F33A85.mp4",
   "framerate": 50,
   "bitrate": 52414,
   "type": "video/mp4",
   "posterURL": "media/media_9C0D1D96_93D3_DA4D_41D7_4FAE68F33A85_poster.jpg",
   "class": "Video360Resource",
   "height": 1080
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85E51190_93BF_6A45_41D8_C2D66010BA26",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_869CD101_93BF_6A46_41E2_168FFFDA1E7B",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.29,
   "yaw": -0.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_82EA44DC_8847_0947_41D4_41044F06A453"
  },
  {
   "backwardYaw": -9.54,
   "yaw": 173.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "captura2",
 "id": "panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD",
 "thumbnailUrl": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_86A330F5_93BF_6BCF_41E0_4707DAAB0833",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_tcap0",
  "this.panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_ccap0",
  "this.overlay_801582A4_8E9F_0BA9_41E1_7868CB1FB956",
  "this.overlay_81817BB9_8E9F_199B_41D7_63CB00E4A107",
  "this.overlay_80A5C7BE_8EAD_0999_41CF_8A9F7DD61843",
  "this.overlay_802977B6_8EAD_09A9_41E1_0924F30B0C58",
  "this.overlay_9D686DE2_93B3_55C5_41E0_2E4BD4F89CF1",
  "this.popup_9C8926A9_93F7_5647_41DD_7B0571174A70",
  "this.popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -19.29,
   "yaw": 174.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_8224260A_8841_08C3_41C8_DF725C76A489"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "captura7",
 "id": "panorama_82359D2B_8841_18C1_41D0_3B20129A6C10",
 "thumbnailUrl": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_86A330F5_93BF_6BCF_41E0_4707DAAB0833",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_ccap0",
  "this.panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_tcap0",
  "this.overlay_81B75ABA_8EA5_1B99_41C8_03E029EBEB43",
  "this.overlay_9C517325_8EAB_0AA8_41D2_3FA4993C21DC"
 ]
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_8796B820_88C1_18FF_41B5_3258A5E0DD31.ogg",
  "mp3Url": "media/audio_8796B820_88C1_18FF_41B5_3258A5E0DD31.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8796B820_88C1_18FF_41B5_3258A5E0DD31",
 "class": "MediaAudio",
 "data": {
  "label": "sonido ambiente taller_1_2_2_2"
 }
},
{
 "hideDuration": 500,
 "id": "popup_9C8926A9_93F7_5647_41DD_7B0571174A70",
 "hfov": 5.77,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_9C8926A9_93F7_5647_41DD_7B0571174A70_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_9C8926A9_93F7_5647_41DD_7B0571174A70_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationY": 0,
 "yaw": -40.12,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "pitch": -4.72,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_86908101_93BF_6A46_41D8_97CB41CA0369"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_822F11D1_93D6_ADC7_41B8_3814B8DCB73F.ogg",
  "mp3Url": "media/audio_822F11D1_93D6_ADC7_41B8_3814B8DCB73F.mp3",
  "class": "AudioResource"
 },
 "id": "audio_822F11D1_93D6_ADC7_41B8_3814B8DCB73F",
 "class": "MediaAudio",
 "data": {
  "label": "voz_oficina"
 }
},
{
 "id": "ImageResource_86906101_93BF_6A46_41DD_752C0AF67B04",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_83063FDF_93B1_55FA_41A1_41D15EE2F752_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_83063FDF_93B1_55FA_41A1_41D15EE2F752_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_83063FDF_93B1_55FA_41A1_41D15EE2F752_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "hideDuration": 500,
 "id": "popup_82868202_93D2_AE45_4199_C749EBC33035",
 "hfov": 5.55,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_82868202_93D2_AE45_4199_C749EBC33035_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_82868202_93D2_AE45_4199_C749EBC33035_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationY": 0,
 "yaw": 110.27,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "pitch": 16.56,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "id": "ImageResource_86967109_93BF_6A46_4192_C8286931FE45",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0.ogg",
  "mp3Url": "media/audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0",
 "class": "MediaAudio",
 "data": {
  "label": "notificacion"
 }
},
{
 "hideDuration": 500,
 "id": "popup_83063FDF_93B1_55FA_41A1_41D15EE2F752",
 "hfov": 5.73,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_83063FDF_93B1_55FA_41A1_41D15EE2F752_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_83063FDF_93B1_55FA_41A1_41D15EE2F752_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationY": 0,
 "yaw": -99.83,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "pitch": 8.18,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_868CE109_93BF_6A46_41D1_B276A1F299AC"
},
{
 "hideDuration": 500,
 "id": "popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764",
 "hfov": 5.31,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationY": 0,
 "yaw": 61.88,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "pitch": 23.63,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "id": "ImageResource_86960109_93BF_6A46_41D7_840F40A7A674",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_82868202_93D2_AE45_4199_C749EBC33035_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_82868202_93D2_AE45_4199_C749EBC33035_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_82868202_93D2_AE45_4199_C749EBC33035_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_86894109_93BF_6A46_41E2_05A9FCEE967F",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_835F678D_93D3_B65E_41D8_31066A4DDCAF_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_835F678D_93D3_B65E_41D8_31066A4DDCAF_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_835F678D_93D3_B65E_41D8_31066A4DDCAF_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_82E47524_93BE_AA4D_41CA_7B43621FB68D.ogg",
  "mp3Url": "media/audio_82E47524_93BE_AA4D_41CA_7B43621FB68D.mp3",
  "class": "AudioResource"
 },
 "id": "audio_82E47524_93BE_AA4D_41CA_7B43621FB68D",
 "class": "MediaAudio",
 "data": {
  "label": "sondio de fondo"
 }
},
{
 "hideDuration": 500,
 "id": "popup_835F678D_93D3_B65E_41D8_31066A4DDCAF",
 "hfov": 12.43,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_835F678D_93D3_B65E_41D8_31066A4DDCAF_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_835F678D_93D3_B65E_41D8_31066A4DDCAF_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationY": 0,
 "yaw": -10.62,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "pitch": 1.18,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_861AD163_93BF_6ACA_41D3_F8F838952EF7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_83BDE960_93F1_5AC5_41DE_8D8C133B4797.ogg",
  "mp3Url": "media/audio_83BDE960_93F1_5AC5_41DE_8D8C133B4797.mp3",
  "class": "AudioResource"
 },
 "id": "audio_83BDE960_93F1_5AC5_41DE_8D8C133B4797",
 "class": "MediaAudio",
 "data": {
  "label": "voz_taller"
 }
},
{
 "id": "ImageResource_868CD109_93BF_6A46_41D6_7037EC7884E0",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_83480682_93D1_5645_41D1_3BF25FC9746A_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_83480682_93D1_5645_41D1_3BF25FC9746A_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_83480682_93D1_5645_41D1_3BF25FC9746A_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_83A9927D_93B2_EEBE_41A0_180D2540BDCC.ogg",
  "mp3Url": "media/audio_83A9927D_93B2_EEBE_41A0_180D2540BDCC.mp3",
  "class": "AudioResource"
 },
 "id": "audio_83A9927D_93B2_EEBE_41A0_180D2540BDCC",
 "class": "MediaAudio",
 "data": {
  "label": "instruccion1"
 }
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_82A89531_93F3_6A46_41E1_794BC9E4DD93.ogg",
  "mp3Url": "media/audio_82A89531_93F3_6A46_41E1_794BC9E4DD93.mp3",
  "class": "AudioResource"
 },
 "id": "audio_82A89531_93F3_6A46_41E1_794BC9E4DD93",
 "class": "MediaAudio",
 "data": {
  "label": "voz_boutique"
 }
},
{
 "id": "ImageResource_86926101_93BF_6A46_41C2_9F81C364F090",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_869CE101_93BF_6A46_41BE_37663877C237"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 168.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_865C7136_93BF_6A4D_41A3_F62B12249C1D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 173.31,
   "yaw": -9.54,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD"
  },
  {
   "backwardYaw": -6.9,
   "yaw": -173.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_8225E7D2_8840_F743_41C4_E13975773E72"
  },
  {
   "backwardYaw": 169.46,
   "yaw": -20.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_8232FEDA_8840_F943_41C1_A07746163657"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "captura3",
 "id": "panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F",
 "thumbnailUrl": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_86A330F5_93BF_6BCF_41E0_4707DAAB0833",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_ccap0",
  "this.panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_tcap0",
  "this.overlay_831E8932_8E9F_06A9_41DA_837E53B00F46",
  "this.overlay_836E0D8A_8E9F_3E79_41E0_1E30FC6CAB5A",
  "this.overlay_80ECC6D3_8E9D_0BEF_41D7_F1852ACDD6A3",
  "this.overlay_80ADE0C1_8EAF_07EB_41AE_C4F4BB83B47D",
  "this.overlay_82DFF15D_93D6_EAFF_41D4_27847C2A94AF",
  "this.popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 160.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_863AB145_93BF_6ACE_41D6_7EB8F8D42100",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_867E511D_93BF_6A7E_41C7_80F72C6D86EF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_866EA127_93BF_6A4A_4191_94AB76E660E2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_8280FCA1_93F1_5A46_41A4_3921C89D4FB6.ogg",
  "mp3Url": "media/audio_8280FCA1_93F1_5A46_41A4_3921C89D4FB6.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8280FCA1_93F1_5A46_41A4_3921C89D4FB6",
 "class": "MediaAudio",
 "data": {
  "label": "voz_tienda"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_9EB66FD5_93B3_55CF_41E0_954EDFC147BA.ogg",
  "mp3Url": "media/audio_9EB66FD5_93B3_55CF_41E0_954EDFC147BA.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9EB66FD5_93B3_55CF_41E0_954EDFC147BA",
 "class": "PanoramaAudio",
 "data": {
  "label": "voz_bienvenida"
 }
},
{
 "id": "ImageResource_8697D109_93BF_6A46_41E1_785EBD18AFE3",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_82868202_93D2_AE45_4199_C749EBC33035_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_82868202_93D2_AE45_4199_C749EBC33035_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_82868202_93D2_AE45_4199_C749EBC33035_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8232FEDA_8840_F943_41C1_A07746163657_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55.ogg",
  "mp3Url": "media/audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55",
 "class": "MediaAudio",
 "data": {
  "label": "transici\u00f3n"
 }
},
{
 "id": "ImageResource_86933109_93BF_6A46_41D1_67CB8ABA7893",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_9C8926A9_93F7_5647_41DD_7B0571174A70_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_9C8926A9_93F7_5647_41DD_7B0571174A70_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_9C8926A9_93F7_5647_41DD_7B0571174A70_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_86930109_93BF_6A46_41CC_8005A3165727",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_9C8926A9_93F7_5647_41DD_7B0571174A70_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_9C8926A9_93F7_5647_41DD_7B0571174A70_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_9C8926A9_93F7_5647_41DD_7B0571174A70_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -11.41,
   "yaw": 139.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_8232FEDA_8840_F943_41C1_A07746163657"
  },
  {
   "backwardYaw": 174.23,
   "yaw": -19.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_82359D2B_8841_18C1_41D0_3B20129A6C10"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "captura6",
 "id": "panorama_8224260A_8841_08C3_41C8_DF725C76A489",
 "thumbnailUrl": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_86A330F5_93BF_6BCF_41E0_4707DAAB0833",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_8224260A_8841_08C3_41C8_DF725C76A489_ccap0",
  "this.panorama_8224260A_8841_08C3_41C8_DF725C76A489_tcap0",
  "this.overlay_80829FCF_8EA7_19F7_41BD_3CF55852746B",
  "this.overlay_9EF3671A_8EA7_0A99_41E0_40B0817BD517",
  "this.overlay_809C72A5_8EAB_0BA8_41A2_855A9A921C1D",
  "this.overlay_82CD78AE_93D2_DA5D_41C8_ED395A5031B9",
  "this.popup_83480682_93D1_5645_41D1_3BF25FC9746A"
 ]
},
{
 "id": "ImageResource_86898109_93BF_6A46_41D7_B8FDCE8F192A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_835F678D_93D3_B65E_41D8_31066A4DDCAF_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_835F678D_93D3_B65E_41D8_31066A4DDCAF_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_835F678D_93D3_B65E_41D8_31066A4DDCAF_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_8697E109_93BF_6A46_41B1_0E970EF61E2E"
},
{
 "class": "ImageResource",
 "id": "ImageResource_86932109_93BF_6A46_41D6_1F4E8B47E3EA"
},
{
 "id": "ImageResource_86969109_93BF_6A46_41C7_737132500AC9",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_82F5BBB6_8EC6_9679_41DA_86EE59039C07",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8224260A_8841_08C3_41C8_DF725C76A489_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.media_9C0D1D96_93D3_DA4D_41D7_4FAE68F33A85"
  },
  {
   "backwardYaw": 139.92,
   "yaw": -11.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_8224260A_8841_08C3_41C8_DF725C76A489"
  },
  {
   "backwardYaw": -20.83,
   "yaw": 169.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "captura5",
 "id": "panorama_8232FEDA_8840_F943_41C1_A07746163657",
 "thumbnailUrl": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_86A330F5_93BF_6BCF_41E0_4707DAAB0833",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_8232FEDA_8840_F943_41C1_A07746163657_ccap0",
  "this.panorama_8232FEDA_8840_F943_41C1_A07746163657_tcap0",
  "this.overlay_836A520A_8E9B_0A79_41C3_BDED14783610",
  "this.overlay_83555D3C_8EA5_1E99_41E0_D4A8EA3C51DD",
  "this.overlay_81E91C59_8EA5_1E9B_41C8_BC5DFC5E1645",
  "this.overlay_83563185_8EAB_066B_41E0_7E283E9335E8",
  "this.overlay_9C42D952_93D1_FAC5_41DA_0260324BA017",
  "this.popup_835F678D_93D3_B65E_41D8_31066A4DDCAF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -10.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85D4D19A_93BF_6A7A_4173_78A600908F48",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_8690A101_93BF_6A46_41CB_2C060BC5E521",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_83063FDF_93B1_55FA_41A1_41D15EE2F752_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_83063FDF_93B1_55FA_41A1_41D15EE2F752_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_83063FDF_93B1_55FA_41A1_41D15EE2F752_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_868B0109_93BF_6A46_41CB_855323A9DDCA",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_83480682_93D1_5645_41D1_3BF25FC9746A_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_83480682_93D1_5645_41D1_3BF25FC9746A_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_83480682_93D1_5645_41D1_3BF25FC9746A_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "hideDuration": 500,
 "id": "popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D",
 "hfov": 5.75,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationY": 0,
 "yaw": -63.8,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "pitch": 6.61,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -174.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_862AD154_93BF_6ACD_41DB_676B2FF8EF65",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_86924101_93BF_6A46_4191_C85E6F6CC51E",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_869B0101_93BF_6A46_4199_F46AB5323188",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -173.65,
   "yaw": -6.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "captura4",
 "id": "panorama_8225E7D2_8840_F743_41C4_E13975773E72",
 "thumbnailUrl": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_86A330F5_93BF_6BCF_41E0_4707DAAB0833",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_8225E7D2_8840_F743_41C4_E13975773E72_ccap0",
  "this.panorama_8225E7D2_8840_F743_41C4_E13975773E72_tcap0",
  "this.overlay_83ECE381_8E9F_0A6B_41E0_33BAD3BE5C1B",
  "this.overlay_837BA9CB_8EAD_19FF_41CC_3EE79A57DF04",
  "this.overlay_81DBB71A_93D1_B645_41DC_77CF8E1D8ABF",
  "this.popup_82868202_93D2_AE45_4199_C749EBC33035"
 ]
},
{
 "hideDuration": 500,
 "id": "popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312",
 "hfov": 5.55,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationY": 0,
 "yaw": -116.31,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "pitch": 16.42,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000
  }
 ],
 "id": "panorama_82EA44DC_8847_0947_41D4_41044F06A453_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -40.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8617016D_93BF_6ADE_41CC_488658CCB0A7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- MENU"
 },
 "children": [
  "this.IconButton_82F5BBB6_8EC6_9679_41DA_86EE59039C07"
 ],
 "layout": "absolute",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_82F5CBB6_8EC6_9679_41D1_A8233FFD018C",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "12.832%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent19209"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage19210"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton19211"
 },
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "horizontalAlign": "center",
 "fontSize": "1.29vmin",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 10,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "minWidth": 0,
 "borderColor": "#000000",
 "top": 10,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "label": "",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "class": "CloseButton",
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "rotate": false,
 "angle": 180,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_82EA44DC_8847_0947_41D4_41044F06A453_ccap0",
 "class": "CeilingCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_ccap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_82EA44DC_8847_0947_41D4_41044F06A453_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD, this.camera_867E511D_93BF_6A7E_41C7_80F72C6D86EF); this.mainPlayList.set('selectedIndex', 1); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.53,
   "image": "this.AnimatedImageResource_9DFA9107_8EAB_0676_41C6_494F387A0E9A",
   "pitch": -21.74,
   "yaw": 5.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_83EA3573_8E9B_0EAF_41DA_ED94F508B454",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.53,
   "yaw": 5.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "eval('window.location.href = \\'https://nomaddi.up.railway.app/int/meta.html\\'; ');",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.45,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_1_HS_1_0.png",
      "width": 297,
      "class": "ImageResourceLevel",
      "height": 330
     }
    ]
   },
   "pitch": -8.39,
   "yaw": 172.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_83E6B89A_8E9D_0799_41C1_1427954D704C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.45,
   "yaw": 172.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -8.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_9C5319E8_93B1_7DC5_41E0_99ABEE3F6312, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_869B0101_93BF_6A46_4199_F46AB5323188, this.ImageResource_869CE101_93BF_6A46_41BE_37663877C237, this.ImageResource_869CD101_93BF_6A46_41E2_168FFFDA1E7B, 10000, this.audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.88,
   "image": "this.AnimatedImageResource_9A6F6C3C_8EA5_7E99_41DA_39CA871F3294",
   "pitch": 16.42,
   "yaw": -116.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9EA55FF2_8EA5_19A9_41DC_1AE3118DD544",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.88,
   "yaw": -116.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_83063FDF_93B1_55FA_41A1_41D15EE2F752, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_8690A101_93BF_6A46_41CB_2C060BC5E521, this.ImageResource_86908101_93BF_6A46_41D8_97CB41CA0369, this.ImageResource_86906101_93BF_6A46_41DD_752C0AF67B04, 10000, this.audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.19,
   "image": "this.AnimatedImageResource_9A60BC3C_8EA5_7E99_41DB_FE82A5EBB374",
   "pitch": 8.18,
   "yaw": -99.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E1A86D6_8EA5_0BE9_41E0_7270ACC2C221",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.19,
   "yaw": -99.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_83A9927D_93B2_EEBE_41A0_180D2540BDCC); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0_HS_5_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": 20.88,
   "yaw": 82.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_832014A4_93B3_AA4D_41A3_1AF40E28F4ED",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.62,
   "yaw": 82.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 20.88
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "rotate": false,
 "angle": 180,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_ccap0",
 "class": "CeilingCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_ccap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82EA44DC_8847_0947_41D4_41044F06A453, this.camera_862AD154_93BF_6ACD_41DB_676B2FF8EF65); this.mainPlayList.set('selectedIndex', 0); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.06,
   "image": "this.AnimatedImageResource_9DF96109_8EAB_067B_41E0_0EDCA64C943D",
   "pitch": -16.94,
   "yaw": -0.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_801582A4_8E9F_0BA9_41E1_7868CB1FB956",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.06,
   "yaw": -0.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F, this.camera_861AD163_93BF_6ACA_41D3_F8F838952EF7); this.mainPlayList.set('selectedIndex', 2); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.18,
   "image": "this.AnimatedImageResource_9DF93109_8EAB_067B_41BC_7ABAE9651894",
   "pitch": -31.01,
   "yaw": 173.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_81817BB9_8E9F_199B_41D7_63CB00E4A107",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.18,
   "yaw": 173.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_83FB6364_93F1_AECD_41D3_14AB1DBEDD0D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_86926101_93BF_6A46_41C2_9F81C364F090, this.ImageResource_86925101_93BF_6A46_41CA_5B0CE359929B, this.ImageResource_86924101_93BF_6A46_4191_C85E6F6CC51E, 10000, this.audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.23,
   "image": "this.AnimatedImageResource_9DF8F109_8EAB_067B_41D2_50A8C9A828D3",
   "pitch": 6.61,
   "yaw": -63.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_80A5C7BE_8EAD_0999_41CF_8A9F7DD61843",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.23,
   "yaw": -63.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_9C8926A9_93F7_5647_41DD_7B0571174A70, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_86933109_93BF_6A46_41D1_67CB8ABA7893, this.ImageResource_86932109_93BF_6A46_41D6_1F4E8B47E3EA, this.ImageResource_86930109_93BF_6A46_41CC_8005A3165727, 10000, this.audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.26,
   "image": "this.AnimatedImageResource_9DF8A109_8EAB_067B_41DE_72BBB1F280DB",
   "pitch": -4.72,
   "yaw": -40.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_802977B6_8EAD_09A9_41E1_0924F30B0C58",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.26,
   "yaw": -40.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_82A89531_93F3_6A46_41E1_794BC9E4DD93); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0_HS_4_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": 14.16,
   "yaw": -106.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9D686DE2_93B3_55C5_41E0_2E4BD4F89CF1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.98,
   "yaw": -106.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.16
  }
 ]
},
{
 "rotate": false,
 "angle": 180,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_ccap0",
 "class": "CeilingCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_ccap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 6, this.audio_824E043C_93D2_AABD_41B7_00DAA66A8F6B); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_1_HS_0_0.png",
      "width": 299,
      "class": "ImageResourceLevel",
      "height": 312
     }
    ]
   },
   "pitch": 7.26,
   "yaw": 91.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_81B75ABA_8EA5_1B99_41C8_03E029EBEB43",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.57,
   "yaw": 91.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8224260A_8841_08C3_41C8_DF725C76A489, this.camera_863AB145_93BF_6ACE_41D6_7EB8F8D42100); this.mainPlayList.set('selectedIndex', 5); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 6, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.07,
   "image": "this.AnimatedImageResource_9A653C4F_8EA5_7EF7_41D4_7D08C7CF29EF",
   "pitch": -35.84,
   "yaw": 174.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C517325_8EAB_0AA8_41D2_3FA4993C21DC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.07,
   "yaw": 174.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.84
  }
 ]
},
{
 "rotate": false,
 "angle": 180,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_ccap0",
 "class": "CeilingCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_ccap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD, this.camera_85F6C181_93BF_6A47_4196_28611DFABCBB); this.mainPlayList.set('selectedIndex', 1); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.25,
   "image": "this.AnimatedImageResource_9DF83109_8EAB_067B_41E1_C1E314C8B828",
   "pitch": -12.82,
   "yaw": -9.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_831E8932_8E9F_06A9_41DA_837E53B00F46",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.25,
   "yaw": -9.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8225E7D2_8840_F743_41C4_E13975773E72, this.camera_85E51190_93BF_6A45_41D8_C2D66010BA26); this.mainPlayList.set('selectedIndex', 3); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.92,
   "image": "this.AnimatedImageResource_9DC7D109_8EAB_067B_41A5_6351222C8AFC",
   "pitch": -18.31,
   "yaw": -173.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_836E0D8A_8E9F_3E79_41E0_1E30FC6CAB5A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.92,
   "yaw": -173.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8232FEDA_8840_F943_41C1_A07746163657, this.camera_85D4D19A_93BF_6A7A_4173_78A600908F48); this.mainPlayList.set('selectedIndex', 4); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow Transparent Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_1_HS_2_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": -1.22,
   "yaw": -20.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_80ECC6D3_8E9D_0BEF_41D7_F1852ACDD6A3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.29,
   "yaw": -20.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_8311E0E6_93D6_ABCA_41CC_3D95C5229764, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_86969109_93BF_6A46_41C7_737132500AC9, this.ImageResource_86968109_93BF_6A46_41B5_AE54411457CB, this.ImageResource_86967109_93BF_6A46_4192_C8286931FE45, 10000, this.audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.43,
   "image": "this.AnimatedImageResource_9DC7810A_8EAB_0679_41DC_CF0E5AEEF0B1",
   "pitch": 23.63,
   "yaw": 61.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_80ADE0C1_8EAF_07EB_41AE_C4F4BB83B47D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.43,
   "yaw": 61.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 23.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_8280FCA1_93F1_5A46_41A4_3921C89D4FB6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.24,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0_HS_4_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": 6.19,
   "yaw": -60.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_82DFF15D_93D6_EAFF_41D4_27847C2A94AF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.24,
   "yaw": -60.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.19
  }
 ]
},
{
 "rotate": false,
 "angle": 180,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_8224260A_8841_08C3_41C8_DF725C76A489_ccap0",
 "class": "CeilingCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_ccap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_8224260A_8841_08C3_41C8_DF725C76A489_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8232FEDA_8840_F943_41C1_A07746163657, this.camera_865C7136_93BF_6A4D_41A3_F62B12249C1D); this.mainPlayList.set('selectedIndex', 4); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 5, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_1_HS_0_0.png",
      "width": 224,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ]
   },
   "pitch": 6.61,
   "yaw": 139.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_80829FCF_8EA7_19F7_41BD_3CF55852746B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.23,
   "yaw": 139.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 6.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82359D2B_8841_18C1_41D0_3B20129A6C10, this.camera_864B2140_93BF_6AC6_41DE_A6B4A263B0F8); this.mainPlayList.set('selectedIndex', 6); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 5, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.76,
   "image": "this.AnimatedImageResource_9DC6710B_8EAB_067F_41DA_79F1061631FF",
   "pitch": -23.73,
   "yaw": -19.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9EF3671A_8EA7_0A99_41E0_40B0817BD517",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.76,
   "yaw": -19.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_83480682_93D1_5645_41D1_3BF25FC9746A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_868B0109_93BF_6A46_41CB_855323A9DDCA, this.ImageResource_868CE109_93BF_6A46_41D1_B276A1F299AC, this.ImageResource_868CD109_93BF_6A46_41D6_7037EC7884E0, 10000, this.audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.59,
   "image": "this.AnimatedImageResource_9DC6310B_8EAB_067F_41C4_C63B1E80960B",
   "pitch": 21.29,
   "yaw": 105.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_809C72A5_8EAB_0BA8_41A2_855A9A921C1D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.59,
   "yaw": 105.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 21.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 5, this.audio_822F11D1_93D6_ADC7_41B8_3814B8DCB73F); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0_HS_3_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": 14.16,
   "yaw": -84.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_82CD78AE_93D2_DA5D_41C8_ED395A5031B9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.98,
   "yaw": -84.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.16
  }
 ]
},
{
 "cursor": "hand",
 "id": "IconButton_82F5BBB6_8EC6_9679_41DA_86EE59039C07",
 "width": 49,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": 30,
 "minWidth": 1,
 "maxWidth": 49,
 "iconURL": "skin/IconButton_82F5BBB6_8EC6_9679_41DA_86EE59039C07.png",
 "maxHeight": 37,
 "bottom": 8,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 37,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_82F5BBB6_8EC6_9679_41DA_86EE59039C07_rollover.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "rotate": false,
 "angle": 180,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_8232FEDA_8840_F943_41C1_A07746163657_ccap0",
 "class": "CeilingCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_ccap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_8232FEDA_8840_F943_41C1_A07746163657_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8224260A_8841_08C3_41C8_DF725C76A489, this.camera_8617016D_93BF_6ADE_41CC_488658CCB0A7); this.mainPlayList.set('selectedIndex', 5); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.34,
   "image": "this.AnimatedImageResource_9DC6510A_8EAB_0679_41A7_5CE7F4FA380D",
   "pitch": 16.49,
   "yaw": -11.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_836A520A_8E9B_0A79_41C3_BDED14783610",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.34,
   "yaw": -11.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_839C0DFC_93D2_D5BD_41CC_F65F44DD2B19); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0_HS_1_0.png",
      "width": 294,
      "class": "ImageResourceLevel",
      "height": 326
     }
    ]
   },
   "pitch": 12.1,
   "yaw": 74.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_83555D3C_8EA5_1E99_41E0_D4A8EA3C51DD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.05,
   "yaw": 74.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 12.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F, this.camera_86071177_93BF_6ACA_41CC_ADF157F27339); this.mainPlayList.set('selectedIndex', 2); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.66,
   "image": "this.AnimatedImageResource_9DC5E10A_8EAB_0679_41DF_0ECC17137EEB",
   "pitch": -53,
   "yaw": 169.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_81E91C59_8EA5_1E9B_41C8_BC5DFC5E1645",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.66,
   "yaw": 169.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_835F678D_93D3_B65E_41D8_31066A4DDCAF, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_86898109_93BF_6A46_41D7_B8FDCE8F192A, this.ImageResource_86896109_93BF_6A46_41DE_EFAA216669BE, this.ImageResource_86894109_93BF_6A46_41E2_05A9FCEE967F, 10000, this.audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.14,
   "image": "this.AnimatedImageResource_86B7B0F0_93BF_6BC5_41D9_14A469FBE95E",
   "pitch": 1.18,
   "yaw": -10.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_83563185_8EAB_066B_41E0_7E283E9335E8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.14,
   "yaw": -10.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7); this.MainViewerPanoramaPlayer.play()",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0_HS_4_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": -8.36,
   "yaw": 74.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9C42D952_93D1_FAC5_41DA_0260324BA017",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.19,
   "yaw": 74.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.36
  }
 ]
},
{
 "rotate": false,
 "angle": 180,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_8225E7D2_8840_F743_41C4_E13975773E72_ccap0",
 "class": "CeilingCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_ccap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "id": "panorama_8225E7D2_8840_F743_41C4_E13975773E72_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F, this.camera_866EA127_93BF_6A4A_4191_94AB76E660E2); this.mainPlayList.set('selectedIndex', 2); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_9E0ED7EE_8EAB_09B9_41D2_6E20719AAB55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.28,
   "image": "this.AnimatedImageResource_9DC7010A_8EAB_0679_41DA_B306B09FCA08",
   "pitch": -14.53,
   "yaw": -6.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_83ECE381_8E9F_0A6B_41E0_33BAD3BE5C1B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.28,
   "yaw": -6.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_82868202_93D2_AE45_4199_C749EBC33035, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_86960109_93BF_6A46_41D7_840F40A7A674, this.ImageResource_8697E109_93BF_6A46_41B1_0E970EF61E2E, this.ImageResource_8697D109_93BF_6A46_41E1_785EBD18AFE3, 10000, this.audio_9D5F3A97_93B7_BE4A_41D5_14C7D3ADB7A0, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.87,
   "image": "this.AnimatedImageResource_9DC6C10A_8EAB_0679_41CB_9EA2CECFDF1A",
   "pitch": 16.56,
   "yaw": 110.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_837BA9CB_8EAD_19FF_41CC_3EE79A57DF04",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.87,
   "yaw": 110.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_83BDE960_93F1_5AC5_41DE_8D8C133B4797); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0_HS_2_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": 11,
   "yaw": -105.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_81DBB71A_93D1_B645_41DC_77CF8E1D8ABF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.11,
   "yaw": -105.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_9DFA9107_8EAB_0676_41C6_494F387A0E9A",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9A6F6C3C_8EA5_7E99_41DA_39CA871F3294",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_82EA44DC_8847_0947_41D4_41044F06A453_0_HS_3_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9A60BC3C_8EA5_7E99_41DB_FE82A5EBB374",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_9DF96109_8EAB_067B_41E0_0EDCA64C943D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_9DF93109_8EAB_067B_41BC_7ABAE9651894",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_1_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9DF8F109_8EAB_067B_41D2_50A8C9A828D3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8220C8FA_8847_1943_41BA_A42F163AC2FD_1_HS_3_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9DF8A109_8EAB_067B_41DE_72BBB1F280DB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_82359D2B_8841_18C1_41D0_3B20129A6C10_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_9A653C4F_8EA5_7EF7_41D4_7D08C7CF29EF",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_9DF83109_8EAB_067B_41E1_C1E314C8B828",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_9DC7D109_8EAB_067B_41A5_6351222C8AFC",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_823EA039_8847_08C1_41D8_9F9A2496EB7F_1_HS_3_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9DC7810A_8EAB_0679_41DC_CF0E5AEEF0B1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_9DC6710B_8EAB_067F_41DA_79F1061631FF",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8224260A_8841_08C3_41C8_DF725C76A489_1_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9DC6310B_8EAB_067F_41C4_C63B1E80960B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_9DC6510A_8EAB_0679_41A7_5CE7F4FA380D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_1_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_9DC5E10A_8EAB_0679_41DF_0ECC17137EEB",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8232FEDA_8840_F943_41C1_A07746163657_0_HS_3_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_86B7B0F0_93BF_6BC5_41D9_14A469FBE95E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_9DC7010A_8EAB_0679_41DA_B306B09FCA08",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_8225E7D2_8840_F743_41C4_E13975773E72_1_HS_1_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9DC6C10A_8EAB_0679_41CB_9EA2CECFDF1A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
}],
 "start": "this.playAudioList([this.audio_8796B820_88C1_18FF_41B5_3258A5E0DD31, this.audio_82E47524_93BE_AA4D_41CA_7B43621FB68D]); this.init()",
 "data": {
  "name": "Player435"
 },
 "children": [
  "this.MainViewer",
  "this.Container_82F5CBB6_8EC6_9679_41D1_A8233FFD018C",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
