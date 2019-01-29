import { Dimensions, Platform } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const blue = '#065ca9'
const red = 'red'
const orange = '#ff8000'
const lightGray = '#989898'

const fontFamily = 'Roboto'

module.exports = {
  blue,
  red,
  orange,
  lightGray,
  fontFamily,

  fill: { flex: 1, backgroundColor: 'white' },

  overlayModal: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 20,
    minWidth: width - 20,
    minHeight: height / 2,
    borderRadius: 15,
    justifyContent: 'center',
  },

  // Header
  topbar_header_view: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: 80,
    alignItems: 'center',
  },
  topbar_back: {
    height: 60, width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topbar_title_text: {
    fontFamily: "Roboto",
    fontSize: 17,
    letterSpacing: 0.5,
    color: 'white',
  },
  icon: {
    color: 'white',
  },
}