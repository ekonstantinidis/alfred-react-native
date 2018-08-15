const alfy = require('alfy');

const rn_website = 'https://facebook.github.io/react-native/docs/';
const toc = [
  {
    title: 'ActivityIndicator',
    url: 'activityindicator'
  },
  {
    title: 'Button',
    url: 'button'
  },
  {
    title: 'DatePickerIOS',
    url: 'datepickerios'
  },
  {
    title: 'DrawerLayoutAndroid',
    url: 'drawerlayoutandroid'
  },
  {
    title: 'FlatList',
    url: 'flatlist'
  },
  {
    title: 'Image',
    url: 'image'
  },
  {
    title: 'InputAccessoryView',
    url: 'inputaccessoryview'
  },
  {
    title: 'KeyboardAvoidingView',
    url: 'keyboardavoidingview'
  },
  {
    title: 'ListView',
    url: 'listview'
  },
  {
    title: 'MapView',
    url: 'mapview'
  },
  {
    title: 'MaskedViewIOS',
    url: 'maskedviewios'
  },
  {
    title: 'Modal',
    url: 'modal'
  },
  {
    title: 'Navigator',
    url: 'navigator'
  },
  {
    title: 'NavigatorIOS',
    url: 'navigatorios'
  },
  {
    title: 'PickerIOS',
    url: 'pickerios'
  },
  {
    title: 'Picker',
    url: 'picker'
  },
  {
    title: 'ProgressBarAndroid',
    url: 'progressbarandroid'
  },
  {
    title: 'ProgressViewIOS',
    url: 'progressviewios'
  },
  {
    title: 'RefreshControl',
    url: 'refreshcontrol'
  },
  {
    title: 'SectionList',
    url: 'sectionlist'
  },
  {
    title: 'ScrollView',
    url: 'scrollview'
  },
  {
    title: 'SegmentedControlIOS',
    url: 'segmentedcontrolios'
  },
  {
    title: 'Slider',
    url: 'slider'
  },
  {
    title: 'StatusBar',
    url: 'statusbar'
  },
  {
    title: 'Switch',
    url: 'switch'
  },
  {
    title: 'TabBarIOS',
    url: 'tabbarios'
  },
  {
    title: 'TabBarIOS.Item',
    url: 'tabbarios-item'
  },
  {
    title: 'Text',
    url: 'text'
  },
  {
    title: 'TextInput',
    url: 'textinput'
  },
  {
    title: 'ToolbarAndroid',
    url: 'toolbarandroid'
  },
  {
    title: 'TouchableHighlight',
    url: 'touchablehighlight'
  },
  {
    title: 'TouchableNativeFeedback',
    url: 'touchablenativefeedback'
  },
  {
    title: 'TouchableOpacity',
    url: 'touchableopacity'
  },
  {
    title: 'TouchableWithoutFeedback',
    url: 'touchablewithoutfeedback'
  },
  {
    title: 'View',
    url: 'view'
  },
  {
    title: 'ViewPagerAndroid',
    url: 'viewpagerandroid'
  },
  {
    title: 'VirtualizedList',
    url: 'virtualizedlist'
  },
  {
    title: 'WebView',
    url: 'webview'
  }
];

const output = alfy
  .inputMatches(toc, 'title')
  .map(doc => {
    return {
      title: doc.title,
      arg: rn_website + doc.url + '.html',
      subtitle: rn_website + doc.url + '.html'
    };
  });

alfy.output(output);
