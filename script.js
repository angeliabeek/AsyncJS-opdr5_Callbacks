const makeHomework = function (course, callback) {
    console.log(`Okay, ok, I'm going to do my ${course} homework now.`);
    setTimeout(function() {callback()}, 2000);
};
//makeHomework("math", doneWithHomework);

const doneWithHomework = function () {
    console.log("Look, Mom/Dad, I'm done with my homework!");
};

makeHomework("math", doneWithHomework);