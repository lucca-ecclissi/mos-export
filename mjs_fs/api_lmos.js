let LMOS = {
    _gsi: ffi("int get_sys_info(char*)"),
    _rb: ffi("void reboot(int)"),
    // ## **`getSysInfo()`**
    // Get system info 
    // Returned json if success or null if C function not exist.
    getSysInfo: function () {
        let info = "";
        this._gsi(info)
        return JSON.parse(info);
    },
    // ## **`reboot(delay)`**
    // System reboot after delay miliseconds, default delay: 100
    reboot: function (delay) {
        this._rb(delay);
    },
};