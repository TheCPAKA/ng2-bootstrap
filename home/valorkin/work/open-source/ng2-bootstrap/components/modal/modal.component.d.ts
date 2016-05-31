import { AfterViewInit, ElementRef, EventEmitter, Renderer, OnDestroy } from '@angular/core';
import { ModalOptions } from './modal-options.class';
import { ComponentsHelper } from '../utils/components-helper.service';
export declare class ModalDirective implements AfterViewInit, OnDestroy {
    config: ModalOptions;
    onShow: EventEmitter<ModalDirective>;
    onShown: EventEmitter<ModalDirective>;
    onHide: EventEmitter<ModalDirective>;
    onHidden: EventEmitter<ModalDirective>;
    isAnimated: boolean;
    isShown: boolean;
    protected _dialog: any;
    protected _config: ModalOptions;
    protected _isShown: boolean;
    private isBodyOverflowing;
    private ignoreBackdropClick;
    private originalBodyPadding;
    private scrollbarWidth;
    private backdrop;
    private element;
    private renderer;
    private document;
    private componentsHelper;
    protected onClick(event: any): void;
    protected onEsc(): void;
    constructor(element: ElementRef, renderer: Renderer, document: any, componentsHelper: ComponentsHelper);
    ngOnDestroy(): any;
    ngAfterViewInit(): any;
    toggle(): void;
    show(): void;
    hide(event?: Event): void;
    private getConfig(config?);
    private showElement();
    private hideModal();
    private showBackdrop(callback?);
    private removeBackdrop();
    private resetAdjustments();
    private checkScrollbar();
    private setScrollbar();
    private resetScrollbar();
    private getScrollbarWidth();
}
