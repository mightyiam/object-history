module.exports = function () {
    var self = this,
        diff,
        back,
        apply;

    if (self.changesetsBack.length === 0) {return false;}

    diff = require("changeset");
    apply = diff.apply;

    back = apply(
        self.changesetsBack.pop(),
        self.last
    );

    self.changesetsFore.push(
        diff(
            back,
            self.last
        )
    );

    self.last = back;

    return self.position();
};