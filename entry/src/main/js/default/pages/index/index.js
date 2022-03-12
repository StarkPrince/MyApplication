// @ts-nocheck
import device from '@system.device';

const TAG = '[index]';
var context;
var getDeviceInfo = function () {
    var res = '';
    device.getInfo({
        success: function (data) {
            console.log(TAG + 'Device screenShape:' + data.screenShape);
            res = data.windowHeight;
        },
        fail: function (data, code) {
            console.log(TAG + 'Error code:' + code + '; Error information: ' + data);
        },
    });
    return res;
};

export default {
    data: {
        tabs_flag: false,
        currentIndex: 0,
        bottom_content: [],
        height_con: 0,
    },
    onInit() {
        console.log(TAG + 'onInit');
        context = this;
        context.bottom_content = this.$t('bottom_content'); //read data from i18n
    },
    onReady() {
        console.log(this.tabs_flag);
        console.log(TAG + 'onReady');
        if (getDeviceInfo() == 'circle') {
            // do something
        }
    },
    onShow() {
        console.log(TAG + 'onShow');
    },
    change: function (e) {
        this.tabs_flag = e.index;
        this.currentIndex = e.index;
    },
}
