import React, { Component } from 'react';
import { View } from "@tarojs/components";
import classNames from "classnames";
import "./index.scss";

type Props = {
  /** 是否显示模态框 */
  isOpened: boolean;
  children?: any;
} & DefaultProps;

type DefaultProps = Partial<{
  /** 触发关闭时的事件 */
  onClose: () => void;
  /** 点击取消按钮触发的事件 */
  onCancel: () => void;
  /** 点击确认按钮触发的事件 */
  onConfirm: () => void;
  /** 类名 */
  className: string;
  /** 标题 */
  title: string;
  /** 取消按钮的文本 */
  cancelText: string;
  /** 确认按钮的文本 */
  confirmText: string;
  /** 是否显示标题 */
  showTitle: boolean;
  /** 是否显示取消按钮 */
  showCancelBtn: boolean;
  /** 点击浮层的时候时候是否自动关闭 */
  closeOnClickOverlay: boolean;
  showBtn?: boolean
}>;

export default class Modal extends Component<Props, { _isOpened: boolean }> {
  constructor(props) {
    super(props)
    const { isOpened } = props;
    this.state = {
      _isOpened: isOpened
    };
  }

  static defaultProps: DefaultProps = {
    showTitle: true,
    showCancelBtn: true,
    closeOnClickOverlay: true,
    showBtn: false
  };

  /** 父组件的props.isOpened改变时的处理 */
  public componentWillReceiveProps(nextProps: Props) {
    const { isOpened } = nextProps;

    if (this.state._isOpened !== isOpened) {
      this.setState({
        _isOpened: isOpened
      });
    }
  }

  /** 点击蒙层的处理 */
  public handleClickOverlay() {
    if (this.props.closeOnClickOverlay) {
      this.setState(
        {
          _isOpened: false
        },
        () => {
          this.handleClose();
        }
      );
    }
  }

  /** 关闭模态框时的处理 */
  public handleClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  /** 点击取消按钮时的处理 */
  public handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  /** 点击确认按钮时的处理 */
  public handleConfirm() {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  }

  public render() {
    const { _isOpened } = this.state;

    const {
      className,
      title,
      cancelText,
      confirmText,
      children,
      showTitle,
      showCancelBtn,
      showBtn
    } = this.props;

    return (
      <View
        className={classNames("modal", { modal__active: _isOpened }, className)}
        onClick={this.handleClickOverlay.bind(this)}
      >
        <View className="modal__container">
          {showTitle && <View className="modal__title">{title || "提示"}</View>}
          <View className="modal__content">{children}</View>
          {showBtn && <View className="modal__buttons">
            {showCancelBtn && (
              <View className="btn cancel__btn" onClick={this.handleCancel.bind(this)}>
                {cancelText || "取消"}
              </View>
            )}
            <View className="btn confirm__btn" onClick={this.handleConfirm.bind(this)}>
              {confirmText || "确认"}
            </View>
          </View>}
        </View>
      </View>
    );
  }
}
