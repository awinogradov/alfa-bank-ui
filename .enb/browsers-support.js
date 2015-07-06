module.exports.getPlatform = function(platform) {
    switch (platform) {
        case 'desktop':
            return [
                'last 2 versions',
                'ie 10',
                'ff 24'
            ];
        case 'touch':
            return [
                'android 4',
                'ios >= 5',
                'ie 10'
            ];
        case 'touch-pad':
            return [
                'android 4',
                'ios 5'
            ];
        case 'touch-phone':
            return [
                'android 4',
                'ios 6',
                'ie 10'
            ];
    }
};
