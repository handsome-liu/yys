//滚动显示
class ScrollShow {
    constructor(target) {
        this.target = this.each(target);
    }
    init() {
        // console.log(this.target);
        this.scrolleve();
    }
    // scrolleve() {
    //     const [windowHeight, timedelay] = [$(window).height(), 200];
    //     $(window).scroll(() => {
    //         const scrolltop = $(document).scrollTop() + windowHeight;//文档滚动的距离 + window高度
    //         // console.log(scrolltop);
    //         for (let i = this.target.length - 1; i >= 0; i--) {
    //             const obj = this.target[i];
    //             if (scrolltop >= $(obj).offset().top) {
    //                 // console.log('show');
    //                 setTimeout(() => {
    //                     console.log(obj);
    //                     $(obj).removeClass('hidden');
    //                 }, timedelay * i);
    //                 console.log(this.target.splice(i, 1));
    //             }
    //         }
    //     });
    // }
    scrolleve() {
        const [windowHeight, timedelay] = [$(window).height(), 200];
        $(window).scroll(() => {
            const scrolltop = $(document).scrollTop() + windowHeight; //文档滚动的距离 + window高度
            // console.log(scrolltop);
            for (let i = this.target.length - 1; i >= 0; i--) {
                const obj = this.target[i];
                if (scrolltop >= obj.top) {
                    setTimeout(() => {
                        // console.log(obj);
                        $(obj).removeClass('hidden');
                    }, timedelay * i);
                    this.target.splice(i, 1);
                    // console.log(this.target.splice(i, 1));
                }
            }
        });
    }
    //遍历器
    each(target) {
        const temp = [];
        // console.log(target);
        for (const iterator of target) {
            // console.log(iterator);
            iterator.each(function() {
                this.top = $(this).offset().top;
                temp.push(this);
            });
        }
        return temp;
    }
}
//ScrollShow
// new ScrollShow([$('#newinfo .main .title'), $('#newinfo .main ul li')]).init();
new ScrollShow([
    $('#newinfo .main .title'),
    $('#newinfo .main ul li:nth-of-type(1)'),
    $('#newinfo .main ul li:nth-of-type(2)'),
    $('#newinfo .main ul li:nth-of-type(3)'),
    $('#newinfo .main ul li:nth-of-type(6)'),
    $('#newinfo .main ul li:nth-of-type(5)'),
    $('#newinfo .main ul li:nth-of-type(4)')
]).init();
 