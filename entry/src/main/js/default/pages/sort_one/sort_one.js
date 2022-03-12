import device from '@system.device';
import prompt from '@system.prompt'

const TAG = '[sort_one]';
var context;
var getDeviceInfo = function () {
    var res = '';
    device.getInfo({
        success: function (data) {
            console.log(TAG + 'Device screenShape:' + data.screenShape);
            res = data.screenShape;
        },
        fail: function (data, code) {
            console.log(TAG + 'Error code:' + code + '; Error information: ' + data);
        },
    });
    return res;
};

export default {
    data: {
        images: {
            images01: "/common/images/add64.png",
            images02: "/common/images/more.png",
            images03: "/common/images/right_arrow.png"
        },
        subclasses: [],
        list_data: []
    },
    onInit() {
        console.log(TAG + 'onInit');
        context = this;
        context.list_data = this.$t('list_data');
        context.subclasses = this.$t('subclasses');
    },
    onReady() {
        console.log(TAG + 'onReady');
        if (getDeviceInfo() == 'circle') {
            // do something
        }
    },
    onShow() {
        console.log(TAG + 'onShow');
    },
    onDestroy() {
        console.log(TAG + 'onDestroy');
    },
    clickPro(params) {
        prompt.showToast({
            message: params,
            duration: 2000,
        });
    }
}