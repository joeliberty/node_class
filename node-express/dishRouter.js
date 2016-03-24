module.exports = function(req,res,next,callback) {
    try {
        if (!req || !res || !next) {
            throw new Error("Bad request");
        } else
            callback(null, {
                perimeter: function() {
                    return (2 * (x + y));
                },
                area: function() {
                    return (x * y);
                }
            });
    } catch (error) {
        callback(error, null);
    }
}