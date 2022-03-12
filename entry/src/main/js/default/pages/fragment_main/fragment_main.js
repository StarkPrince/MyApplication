import device from '@system.device';

const TAG = '[fragment_main]';
var context
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
    data() {
        return {
            images: {
                image01: "/common/images/left_arrow.png",
                image02: "/common/images/add64.png"
            },
            list_data: [],
            index_tab: 0
        }
    },
    onInit() {
        console.log(TAG + 'onInit');
        context = this;
        context.list_data = this.$t('screen-side');
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
    changeFun(params) {
        context.index_tab = params.index;
    }
}