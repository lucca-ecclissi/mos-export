let LMOS = {
    _gsi: ffi("char* get_sys_info(void)"),
    _rb: ffi("void reboot(int)"),
    // ## **`getSysInfo()`**
    // Get system info 
    // Returned json if success or null if C function not exist.
    getSysInfo: function () {
        if (this._gsi) {
            return JSON.parse(this._gsi());
        } else {
            return null;
        }
    },
    // ## **`reboot(delay)`**
    // System reboot after delay miliseconds, default delay: 100
    reboot: function (delay) {
        if (this._rb) this._rb(delay);
    },
};