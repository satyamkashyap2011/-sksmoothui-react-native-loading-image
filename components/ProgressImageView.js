import React, { Component } from "react";
import { Text, View } from "react-native";
import Spinner from "react-native-spinkit";
import FastImage from "react-native-fast-image";
import { ExportIcons } from "../assets";
import PropTypes from "prop-types";

class ProgressImageView extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, error: false };
  }

  _onLoad = () => {
    this.setState({ loaded: true });
  };
  _onError = (error) => {
    this.setState({ error: true });
  };

  render() {
    let imageSrc = this.props.source;
    let imgStyle = this.props.style;
    let placeHolderSrc = this.props.placeHolderSrc;
    let resizeMode = this.props.resizeMode;
    let containerStyle = this.props.containerStyle || {};
    let viewChildren = this.props.viewChildren
      ? this.props.viewChildren()
      : null;

    return (
      <View
        style={{
          justifyContent: "center",
          ...containerStyle,
        }}
      >
        {viewChildren}
        <FastImage
          {...this.props}
          source={
            !this.state.error
              ? imageSrc
              : placeHolderSrc != null
              ? placeHolderSrc
              : ExportIcons.placeholder
          }
          style={{
            backgroundColor: this.state.error
              ? COLORS.TEXT_GRAY10_COLOR
              : "#00000000",
            borderWidth: this.state.error ? 0.3 : 0,
            borderColor: this.state.error
              ? COLORS.TEXT_GRAY11_COLOR
              : "#00000000",
            ...imgStyle,
          }}
          resizeMode={resizeMode}
          onLoad={this._onLoad}
          onError={this._onError}
        />

        {!this.state.loaded && (
          <Spinner
            style={{
              position: "absolute",
              justifyContent: "center",
              alignSelf: "center",
            }}
            type={"FadingCircleAlt"}
            color={COLORS.THEME_COLOR}
          />
        )}
      </View>
    );
  }
}
ProgressImageView.propTypes = {
  source: PropTypes.object,
  viewChildren: PropTypes.element,
  colorLoader: PropTypes.string,
  placeHolderSrc: PropTypes.any,

  ...FastImage.propTypes,
};
export const COLORS = {
  TEXT_GRAY10_COLOR: "#F2F2F2",
  TEXT_GRAY11_COLOR: "#D2D2D2",
  THEME_COLOR: "black",
};
export default ProgressImageView;
