let LMOS = {
    getSysInfo: ffi("void get_sys_info(void(*)(char*,userdata),userdata)"),
    _rb: ffi("void reboot(int)"),
    // ## **`getSysInfo(callback)`**
    // Get system info 
    // Returned json if success or null if C function not exist.
    // getSysInfo: function (callback) {
    //     this._gsi(callback)
    // },
    // ## **`reboot(delay)`**
    // System reboot after delay miliseconds, default delay: 100
    reboot: function (delay) {
        this._rb(delay);
    },
};