# @sksmoothui/react-native-loading-image

peer-dependencies - react-native-spinkit, react-native-fast-image

This Module load images through react-native-fast-image and handle the loading and failed load condition and show images accordingly.

#### Demo

![Success](https://github.com/satyamkashyap2011/assets/blob/main/%40sksmoothui/react-native-loading-image/video3.gif)

![Failed](https://github.com/satyamkashyap2011/assets/blob/main/%40sksmoothui/react-native-loading-image/videoFailed.gif)


#### Example

```javascript

import ProgressImageView from '@sksmoothui/react-native-loading-image';

<ProgressImageView
    source={{uri:'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg'}}
    style ={{
    height:100,
    width:100
    }}/>
```
