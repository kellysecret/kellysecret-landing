const countries = {
    af: 'Afghanistan',
    ax: 'Aland Islands',
    al: 'Albania',
    dz: 'Algeria',
    as: 'American Samoa',
    ad: 'Andorra',
    ao: 'Angola',
    ai: 'Anguilla',
    aq: 'Antarctica',
    ag: 'Antigua and Barbuda',
    ar: 'Argentina',
    am: 'Armenia',
    aw: 'Aruba',
    au: 'Australia',
    at: 'Austria',
    az: 'Azerbaijan',
    bs: 'Bahamas',
    bh: 'Bahrain',
    bd: 'Bangladesh',
    bb: 'Barbados',
    by: 'Belarus',
    be: 'Belgium',
    bz: 'Belize',
    bj: 'Benin',
    bm: 'Bermuda',
    bt: 'Bhutan',
    bo: 'Bolivia',
    ba: 'Bosnia and Herzegovina',
    bw: 'Botswana',
    bv: 'Bouvet Island',
    br: 'Brazil',
    io: 'British Indian Ocean Territory',
    vg: 'British Virgin Islands',
    bn: 'Brunei',
    bg: 'Bulgaria',
    bf: 'Burkina Faso',
    bi: 'Burundi',
    kh: 'Cambodia',
    cm: 'Cameroon',
    ca: 'Canada',
    cv: 'Cape Verde',
    ky: 'Cayman Islands',
    cf: 'Central African Republic',
    td: 'Chad',
    cl: 'Chile',
    cn: 'China',
    cx: 'Christmas Island',
    cc: 'Cocos Island',
    co: 'Colombia',
    km: 'Comoros',
    cg: 'Congo',
    cd: 'Congo, Democratic Republic of',
    ck: 'Cook Islands',
    cr: 'Costa Rica',
    ci: "C&ocirc;te d'Ivoire",
    hr: 'Croatia',
    cu: 'Cuba',
    cy: 'Cyprus',
    cz: 'Czech Republic',
    dk: 'Denmark',
    xx: 'Disputed Territory',
    dj: 'Djibouti',
    dm: 'Dominica',
    do: 'Dominican Republic',
    ec: 'Ecuador',
    eg: 'Egypt',
    sv: 'El Salvador',
    gq: 'Equatorial Guinea',
    er: 'Eritrea',
    ee: 'Estonia',
    et: 'Ethiopia',
    fk: 'Falkland Islands',
    fo: 'Faroe Islands',
    fj: 'Fiji',
    fi: 'Finland',
    fr: 'France',
    gf: 'French Guiana',
    pf: 'French Polynesia',
    tf: 'French Southern Territories',
    ga: 'Gabon',
    gm: 'Gambia',
    ge: 'Georgia',
    de: 'Germany',
    gh: 'Ghana',
    gi: 'Gibraltar',
    gr: 'Greece',
    gl: 'Greenland',
    gd: 'Grenada',
    gp: 'Guadeloupe',
    gu: 'Guam',
    gt: 'Guatemala',
    gg: 'Guernsey',
    gn: 'Guinea',
    gw: 'Guinea-Bissau',
    gy: 'Guyana',
    ht: 'Haiti',
    hm: 'Heard Islands and McDonald Islands',
    hn: 'Honduras',
    hk: 'Hong Kong',
    hu: 'Hungary',
    is: 'Iceland',
    in: 'India',
    id: 'Indonesia',
    ir: 'Iran',
    iq: 'Iraq',
    xe: 'Iraq-Saudi Arabia Neutral Zone',
    ie: 'Ireland',
    im: 'Isle of Man',
    il: 'Israel',
    it: 'Italy',
    ci: 'Ivory Coast',
    jm: 'Jamaica',
    jp: 'Japan',
    je: 'Jersey',
    jo: 'Jordan',
    kz: 'Kazakhstan',
    ke: 'Kenya',
    ki: 'Kiribati',
    kw: 'Kuwait',
    kg: 'Kyrgyzstan',
    la: 'Laos',
    lv: 'Latvia',
    lb: 'Lebanon',
    ls: 'Lesotho',
    lr: 'Liberia',
    ly: 'Libya',
    li: 'Liechtenstein',
    lt: 'Lithuania',
    lu: 'Luxembourg',
    mo: 'Macao',
    mk: 'Macedonia',
    mg: 'Madagascar',
    mw: 'Malawi',
    my: 'Malaysia',
    mv: 'Maldives',
    ml: 'Mali',
    mt: 'Malta',
    mh: 'Marshall Islands',
    mg: 'Martinique',
    mr: 'Mauritania',
    mu: 'Mauritius',
    yt: 'Mayotte',
    mx: 'Mexico',
    fm: 'Micronesia',
    md: 'Moldova',
    mc: 'Monaco',
    mn: 'Mongolia',
    me: 'Montenegro',
    ms: 'Montserrat',
    ma: 'Morocco',
    mz: 'Mozambique',
    mm: 'Myanmar',
    na: 'Namibia',
    nr: 'Nauru',
    np: 'Nepal',
    nl: 'Netherlands',
    an: 'Netherlands Antilles',
    nc: 'New Caledonia',
    nz: 'New Zealand',
    ni: 'Nicaragua',
    ne: 'Niger',
    ng: 'Nigeria',
    nu: 'Niue',
    nf: 'Norfolk Island',
    mp: 'Northern Mariana Islands',
    kp: 'North Korea',
    no: 'Norway',
    om: 'Oman',
    pk: 'Pakistan',
    pw: 'Palau',
    ps: 'Palestinian Territory',
    pa: 'Panama',
    pg: 'Papua New Guinea',
    py: 'Paraguay',
    pe: 'Peru',
    ph: 'Philippines',
    pn: 'Pitcairn Islands',
    pl: 'Poland',
    pt: 'Portugal',
    pr: 'Puerto Rico',
    qa: 'Qatar',
    re: 'Reunion',
    ro: 'Romania',
    ru: 'Russia',
    rw: 'Rwanda',
    sh: 'Saint Helena',
    kn: 'Saint Kitts and Nevis',
    lc: 'Sant Lucia',
    pm: 'Saint Pierre and Miquelon',
    vc: 'Sant Vincent and the Grenadines',
    ws: 'Samoa',
    sm: 'San Marino',
    st: 'S&atilde;p Tom&eacute; and Pr&iacute;ncipe',
    sa: 'Saudi Arabia',
    sn: 'Senegal',
    rs: 'Serbia',
    cs: 'Serbia and Montenegro',
    sc: 'Seychelles',
    sl: 'Sierra Leone',
    sg: 'Singapore',
    sk: 'Slovakia',
    si: 'Slovenia',
    sb: 'Solomon Islands',
    so: 'Somalia',
    za: 'South Africa',
    gs: 'South Georgia and the South Sandwich Islands',
    kr: 'South Korea',
    es: 'Spain',
    lk: 'Sri Lanka',
    sd: 'Sudan',
    sr: 'Suriname',
    sj: 'Svalbard and Jan Mayen Islands',
    sz: 'Swaziland',
    se: 'Sweden',
    ch: 'Switzerland',
    sy: 'Syria',
    tw: 'Taiwan',
    tj: 'Tajikistan',
    tz: 'Tanzania',
    th: 'Thailand',
    tl: 'Timor-Leste',
    tg: 'Togo',
    tk: 'Tokelau',
    to: 'Tonga',
    tt: 'Trinidad and Tobago',
    tn: 'Tunisia',
    tr: 'Turkey',
    tm: 'Turkmenistan',
    tc: 'Turks and Caicos Islands',
    tv: 'Tuvalu',
    ug: 'Uganda',
    ua: 'Ukraine',
    ae: 'United Arab Emirates',
    uk: 'United Kingdom',
    xd: 'United Nations Neutral Zone',
    us: 'United States',
    um: 'United States Minor Outlying Islands',
    vi: 'U.S. Virgin Islands',
    uy: 'Uruguay',
    uz: 'Uzbekistan',
    vu: 'Vanuatu',
    va: 'Vatican City',
    ve: 'Venezuela',
    vn: 'Vietnam',
    wf: 'Wallis and Futuna Islands',
    eh: 'Western Sahara',
    ye: 'Yemen',
    zm: 'Zambia',
    zw: 'Zimbabwe',
}
const setLocationPeriod = (location) => {
    const contentColab = document.getElementById('content-colab-info')
    const locationInfo = document.getElementById('location-info')

    //  📍Haarlem, Netherlands
    locationInfo.innerHTML = `📍${location.city}, ${countries[location.country.toLowerCase()]}`;

    //  Just moved to Haarlem looking for someone to make content with me😊
    contentColab.innerHTML = `Just moved to ${location.city} looking for someone to make content with me😊`

}

const getLocation = async () => {
    const reponse = await fetch('https://ipinfo.io?token=2c5027935626e9')
    const result = await reponse.json()
    setLocationPeriod(result)
    return result
}

let images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
]

let mobileImages = [
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
]

let selectedImage = images[2];
let mobileSelectedImage = images[1];


function setImages() {
    let image1 = document.getElementById('1');
    let image2 = document.getElementById('2');
    let image3 = document.getElementById('3');
    let image4 = document.getElementById('4');
    let image5 = document.getElementById('5');

    // change the source 
    image1.src = images[0];
    image2.src = images[1];
    image3.src = images[2];
    image4.src = images[3];
    image5.src = images[4];

    // add event listener
    image1.addEventListener('click', () => {
        changeImage(image1)

    })
    image2.addEventListener('click', () => {
        changeImage(image2)

    })
    image3.addEventListener('click', () => {
        changeImage(image3)

    })
    image4.addEventListener('click', () => {
        changeImage(image4)

    })
    image5.addEventListener('click', () => {
        changeImage(image5)

    })
}

function getNthImageFromArray(n) {
    // should support negative numbers and numbers bigger than the array length
    let index = n % images.length;
    if (index < 0) {
        index = images.length + index;
    }
    return images[index];
}

function getNthImageFromMobileArray(n) {
    // should support negative numbers and numbers bigger than the array length
    let index = n % mobileImages.length;
    if (index < 0) {
        index = mobileImages.length + index;
    }
    return mobileImages[index];
}


function changeImage(image) {
    // the image sources will be shifted to the correct position after the click
    let image3 = document.getElementById('3');
    // change it's source to the current image
    image3.src = image.src;
    let splitted = image.src.split('/');
    let filename = 'images/' + splitted[splitted.length - 1];
    let index = images.indexOf(filename);
    // change the source of all the other images
    let image1 = document.getElementById('1');
    let image2 = document.getElementById('2');
    let image4 = document.getElementById('4');
    let image5 = document.getElementById('5');
    image1.src = getNthImageFromArray(index - 2);
    image2.src = getNthImageFromArray(index - 1);
    image4.src = getNthImageFromArray(index + 1);
    image5.src = getNthImageFromArray(index + 2);
}

function changeMobileImage(image) {
    // the image sources will be shifted to the correct position after the click
    let image2 = document.getElementById('mob-2');
    // change it's source to the current image
    image2.src = image.src;
    let splitted = image.src.split('/');
    let filename = 'images/' + splitted[splitted.length - 1];
    let index = mobileImages.indexOf(filename);
    // change the source of all the other images
    let image1 = document.getElementById('mob-1');
    let image3 = document.getElementById('mob-3');
    image1.src = getNthImageFromMobileArray(index - 1);
    image3.src = getNthImageFromMobileArray(index + 1);
}

function setMobileImages() {
    let image1 = document.getElementById('mob-1');
    let image2 = document.getElementById('mob-2');
    let image3 = document.getElementById('mob-3');

    // change the source 
    image1.src = images[0];
    image2.src = images[1];
    image3.src = images[2];

    // add event listener
    image1.addEventListener('click', () => {
        changeMobileImage(image1)
    })
    image2.addEventListener('click', () => {
        changeMobileImage(image2)
    })
    image3.addEventListener('click', () => {
        changeMobileImage(image3)
    })
}


window.addEventListener('load', () => {
    getLocation()
    setImages()
    setMobileImages()
})


