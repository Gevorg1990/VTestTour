(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    return i(g);
    function i(p, q) {
        switch (p) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['startsWith']('photo'))
                        x = this['getByClassName']('PhotoPlayList');
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var B = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (B) {
                            w = B[0x1];
                            switch ('quiz.' + B[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var C = this['get']('data')['quiz'];
                        if (C) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, G[I]['id'], s), this);
                                        }
                                    } else {
                                        C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    C['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var L = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            L += C['getObjective'](G[I]['id'], s);
                                        }
                                    } else {
                                        L = C['getObjective'](w, s);
                                    }
                                } else {
                                    L = C['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        L += 0x1;
                                }
                                return L;
                            } catch (M) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var N = this['get']('data');
        N['updateText'](N['translateObjs'][f]);
    }
    function k(O) {
        var P = O['data']['nextSelectedIndex'];
        if (P >= 0x0) {
            var Q = O['source']['get']('items')[P];
            var R = function () {
                Q['unbind']('begin', R, this);
                j['call'](this);
            };
            Q['bind']('begin', R, this);
        }
    }
    function l(S) {
        return function (T) {
            if (S in T) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(U, V) {
        return function (W, X) {
            if (U == W && V in X) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(Y, Z, a0) {
        for (var a1 = 0x0; a1 < Y['length']; ++a1) {
            var a2 = Y[a1];
            var a3 = a2['get']('selectedIndex');
            if (a3 >= 0x0) {
                var a4 = Z['split']('.');
                var a5 = a2['get']('items')[a3];
                if (a0 !== undefined && !a0['call'](this, a5))
                    continue;
                for (var a6 = 0x0; a6 < a4['length']; ++a6) {
                    if (a5 == undefined)
                        return '';
                    a5 = 'get' in a5 ? a5['get'](a4[a6]) : a5[a4[a6]];
                }
                return a5;
            }
        }
        return '';
    }
    function o(a7, a8) {
        var a9 = a8['get']('player');
        return a9 !== undefined && a9['get']('viewerArea') == a7;
    }
}
var script = {"backgroundColorRatios":[0],"left":541.65,"start":"this.init()","data":{"textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"rate":1,"pitch":1},"history":{},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player3891"},"children":["this.MainViewer_mobile"],"id":"rootPlayer","gap":10,"layout":"absolute","backgroundColor":["#FFFFFF"],"minWidth":0,"minHeight":0,"width":"100%","height":"100%","scrollBarColor":"#000000","class":"Player","scripts":{"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPixels":TDV.Tour.Script.getPixels,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"createTween":TDV.Tour.Script.createTween,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showWindow":TDV.Tour.Script.showWindow,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"init":TDV.Tour.Script.init,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setLocale":TDV.Tour.Script.setLocale,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"resumePlayers":TDV.Tour.Script.resumePlayers,"downloadFile":TDV.Tour.Script.downloadFile,"translate":TDV.Tour.Script.translate,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMainViewer":TDV.Tour.Script.getMainViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setValue":TDV.Tour.Script.setValue,"unregisterKey":TDV.Tour.Script.unregisterKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"existsKey":TDV.Tour.Script.existsKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"clone":TDV.Tour.Script.clone,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"mixObject":TDV.Tour.Script.mixObject,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizStart":TDV.Tour.Script.quizStart,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getKey":TDV.Tour.Script.getKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"openLink":TDV.Tour.Script.openLink,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"startMeasurement":TDV.Tour.Script.startMeasurement,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getOverlays":TDV.Tour.Script.getOverlays,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"executeJS":TDV.Tour.Script.executeJS,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot},"scrollBarMargin":2,"propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"hash": "852362b81a7393b239728173b6a41ee922d160ba1114b24165de410d4eeb5918", "definitions": [{"viewerArea":"this.MainViewer_mobile","mode":"quality","touchControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer","arrowKeysAction":"translate"},{"overlays":["this.overlay_25EC9001_375F_75D6_41C8_03A707DBF084","this.overlay_246BA59D_375B_DEE9_41C7_B23B7455BB97","this.overlay_24422E7F_3765_6A2A_41A5_C4549832590D"],"label":trans('panorama_3969DC05_372F_ADDE_41B4_DF42BC0B1F56.label'),"data":{"label":"istockphoto-1321116143-1024x1024"},"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1,"width":3072,"colCount":6,"url":"media/panorama_3969DC05_372F_ADDE_41B4_DF42BC0B1F56_0/{face}/0/{row}_{column}.jpg"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_3969DC05_372F_ADDE_41B4_DF42BC0B1F56_t.jpg"}],"vfov":180,"hfovMin":"282%","thumbnailUrl":"media/panorama_3969DC05_372F_ADDE_41B4_DF42BC0B1F56_t.jpg","class":"Panorama","hfov":360,"hfovMax":130,"id":"panorama_3969DC05_372F_ADDE_41B4_DF42BC0B1F56"},{"displayPlaybackBar":true,"class":"VideoPlayer","viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobileVideoPlayer","displayPlayOverlay":true,"clickAction":"play_pause"},{"id":"video_3881CE80_3725_AAD6_41C7_05C2CEB7F3A6","label":trans('video_3881CE80_3725_AAD6_41C7_05C2CEB7F3A6.label'),"video":"this.videores_38419100_3725_F7D6_41B4_B37370973DFE","width":1912,"height":964,"thumbnailUrl":"media/video_3881CE80_3725_AAD6_41C7_05C2CEB7F3A6_t.jpg","class":"Video","scaleMode":"none","data":{"label":"bandicam 2023-02-06 15-57-38-741"}},{"initialSequence":"this.sequence_3A0600A6_372F_B6DB_41B5_AED1008E751C","class":"PanoramaCamera","id":"panorama_3969DC05_372F_ADDE_41B4_DF42BC0B1F56_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"enterPointingToHorizon":true},{"class":"PlayList","id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_3969DC05_372F_ADDE_41B4_DF42BC0B1F56_camera","media":"this.panorama_3969DC05_372F_ADDE_41B4_DF42BC0B1F56","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"VideoPlayListItem","player":"this.MainViewer_mobileVideoPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)","media":"this.video_3881CE80_3725_AAD6_41C7_05C2CEB7F3A6","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)"}]},{"subtitlesFontSize":"3vmin","id":"MainViewer_mobile","toolTipFontFamily":"Arial","subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderRadius":2,"progressBarBorderSize":0,"class":"ViewerArea","subtitlesTextShadowHorizontalLength":1,"progressBackgroundColor":["#000000"],"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"progressBarBackgroundColorRatios":[0],"progressLeft":"33%","toolTipBorderRadius":1,"data":{"name":"Main Viewer"},"progressBarBorderRadius":2,"subtitlesFontFamily":"Arial","vrPointerColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","playbackBarBottom":5,"playbackBarHeadShadowBlurRadius":1.5,"toolTipShadowColor":"#333138","playbackBarLeft":0,"minWidth":50,"minHeight":25,"toolTipTextShadowColor":"#000000","firstTransitionDuration":0,"progressRight":"33%","playbackBarHeadShadowOpacity":0.7,"toolTipFontSize":"1.11vmin","subtitlesBackgroundColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadHeight":15,"progressBackgroundColorRatios":[0],"playbackBarHeight":10,"progressBottom":10,"subtitlesGap":0,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowOpacity":1,"height":"100%","playbackBarProgressBackgroundColorRatios":[0],"width":"100%","progressBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarHeadWidth":6,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowBlurRadius":1,"toolTipBorderColor":"#767676","playbackBarProgressBorderSize":0,"playbackBarHeadBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowBlurRadius":1,"progressBarBackgroundColorDirection":"horizontal","toolTipFontColor":"#606060","progressOpacity":0.7,"vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"subtitlesBottom":50,"progressHeight":2,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"playbackBarRight":0,"top":0,"progressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarProgressBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"toolTipPaddingRight":3,"toolTipPaddingLeft":3,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTop":0,"left":0,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"propagateClick":false,"progressBarBorderColor":"#000000"},{"image":"this.res_25886535_375C_DE3E_41A9_10E278F97F17","distance":50,"data":{"label":"Video"},"video":"this.videores_38419100_3725_F7D6_41B4_B37370973DFE","enabled":false,"useHandCursor":true,"vertices":[{"class":"PanoramaPoint","yaw":117.96,"pitch":2.81},{"class":"PanoramaPoint","yaw":142.91,"pitch":3.48},{"class":"PanoramaPoint","yaw":143.54,"pitch":-14.35},{"class":"PanoramaPoint","yaw":117.7,"pitch":-11.3}],"click":"this.setOverlaysVisibility([this.overlay_25EC9001_375F_75D6_41C8_03A707DBF084,this.overlay_246BA59D_375B_DEE9_41C7_B23B7455BB97,this.overlay_24422E7F_3765_6A2A_41A5_C4549832590D], 'toggle', 0)","cues":[],"autoplay":true,"class":"QuadVideoPanoramaOverlay","id":"overlay_25EC9001_375F_75D6_41C8_03A707DBF084"},{"id":"overlay_246BA59D_375B_DEE9_41C7_B23B7455BB97","data":{"label":"Polygon"},"rollOverDisplay":true,"items":[{"vfov":20.1,"image":{"levels":[{"class":"ImageResourceLevel","height":57,"width":77,"url":"media/panorama_3969DC05_372F_ADDE_41B4_DF42BC0B1F56_HS_9es119tn.png"}],"class":"ImageResource"},"hfov":26.74,"data":{"label":"Polygon"},"distance":50,"pitch":-4.82,"class":"HotspotPanoramaOverlayImage","yaw":130.51}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_240955D3_375B_DE79_41BF_785DCFDDF9A6"],"maps":[],"useHandCursor":true,"enabledInCardboard":true},{"id":"overlay_24422E7F_3765_6A2A_41A5_C4549832590D","data":{"label":"Image"},"items":[{"vfov":5.81,"distance":50,"data":{"label":"Image"},"pitch":-4.57,"class":"HotspotPanoramaOverlayImage","yaw":129.92,"hfov":6.81,"scaleMode":"fit_inside","image":"this.res_24CD4202_3765_D5DA_41B1_49BC786933A3"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_25AA7F87_3765_6AD8_4183_B765996BD195"],"maps":[],"useHandCursor":true,"enabledInCardboard":true},{"levels":["this.videolevel_5613C5E0_476B_4F00_4196_9E275487CEC9"],"class":"VideoResource","height":964,"id":"videores_38419100_3725_F7D6_41B4_B37370973DFE","width":1912},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"id":"sequence_3A0600A6_372F_B6DB_41B5_AED1008E751C"},{"levels":[{"class":"ImageResourceLevel","height":964,"width":1912,"url":"media/res_25886535_375C_DE3E_41A9_10E278F97F17_0.jpg"}],"class":"ImageResource","id":"res_25886535_375C_DE3E_41A9_10E278F97F17"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_240955D3_375B_DE79_41BF_785DCFDDF9A6","mapColor":"image","displayTooltipInTouchScreens":true,"click":"this.setOverlaysVisibility([this.overlay_25EC9001_375F_75D6_41C8_03A707DBF084,this.overlay_246BA59D_375B_DEE9_41C7_B23B7455BB97,this.overlay_24422E7F_3765_6A2A_41A5_C4549832590D], 'toggle', 0)"},{"levels":[{"class":"ImageResourceLevel","height":23,"width":23,"url":"media/res_24CD4202_3765_D5DA_41B1_49BC786933A3_0.png"}],"class":"ImageResource","id":"res_24CD4202_3765_D5DA_41B1_49BC786933A3"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_25AA7F87_3765_6AD8_4183_B765996BD195","displayTooltipInTouchScreens":true},{"class":"VideoResourceLevel","url":trans('videolevel_5613C5E0_476B_4F00_4196_9E275487CEC9.url'),"width":1912,"bitrate":3527,"posterURL":trans('videolevel_5613C5E0_476B_4F00_4196_9E275487CEC9.posterURL'),"type":"video/mp4","framerate":25.52,"height":964,"id":"videolevel_5613C5E0_476B_4F00_4196_9E275487CEC9"}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var aa = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return aa;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.21.js.map
})();
//Generated with v2022.2.21, Mon Apr 3 2023