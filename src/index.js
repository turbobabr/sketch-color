

import tc from 'tinycolor2';

const isMSColorInstance = (obj) => {
    return toString.call(obj) === '[object MOBoxedObject]' && obj.className().UTF8String() === 'MSColor';
};

const convert = (input,fn,clr) => {
    clr = clr || MSColor.alloc().init();
    const rgba = fn(input).toRgb();

    clr.red = rgba.r / 255.0;
    clr.green = rgba.g / 255.0;
    clr.blue = rgba.b / 255.0;
    clr.alpha = rgba.a;

    return clr;
};

export default function color(input,clr) {
    if(isMSColorInstance(input)) {
        return tc.fromRatio({
            r: input.red(),
            g: input.green(),
            b: input.blue(),
            a: input.alpha()
        });
    }

    return convert(input,tc,clr);
}

export function colorFromRatio(input,clr) {
    return convert(input,tc.fromRatio,clr);
}

export var tinycolor = tc;