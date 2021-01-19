import { CupertinoPane, CupertinoSettings } from 'cupertino-pane';
import { Device } from './device';
import { Breakpoints } from './breakpoints';
/**
 * Touch start, Touch move, Touch end,
 * Click, Keyboard show, Keyboard hide
 */
export declare class Events {
    private instance;
    private settings;
    private device;
    private breakpoints;
    private allowClick;
    private disableDragAngle;
    private pointerDown;
    private contentScrollTop;
    private startY;
    private startX;
    private steps;
    private inputBlured;
    constructor(instance: CupertinoPane, settings: CupertinoSettings, device: Device, breakpoints: Breakpoints);
    /**
     * Touch Start Event
     * @param t
     */
    touchStartCb: (t: any) => void;
    private touchStart;
    /**
     * Touch Move Event
     * @param t
     */
    touchMoveBackdropCb: (t: any) => void;
    private touchMoveBackdrop;
    /**
     * Touch Move Event
     * @param t
     */
    touchMoveCb: (t: any) => void;
    private touchMove;
    /**
     * Touch End Event
     * @param t
     */
    touchEndCb: (t: any) => void;
    private touchEnd;
    /**
     * Click Event
     * @param t
     */
    onClickCb: (t: any) => void;
    private onClick;
    /**
     * Open Cordova Keyboard event
     * @param e
     */
    onKeyboardShowCb: (e: any) => void;
    private onKeyboardShow;
    /**
     * Close Cordova Keyboard event
     * @param e
     */
    onKeyboardHideCb: (e: any) => void;
    private onKeyboardHide;
    /**
     * Window resize event
     * @param e
     */
    onWindowResizeCb: (e: any) => void;
    private onWindowResize;
    /**
     * Private class methods
     */
    /**
     * Fix android keyboard issue with transition
     * (resize window frame height on hide/show)
     */
    private fixAndroidResize;
    /**
     * Check if drag event fired by scrollable element
     */
    private isDragScrollabe;
    private willScrolled;
    private isFormElement;
    private isElementScrollable;
}