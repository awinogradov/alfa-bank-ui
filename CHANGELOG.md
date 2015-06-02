<a name"3.2.0"></a>
## 3.2.0 (2015-06-02)


#### Bug Fixes

* **form:** add novalidate attribute to disable browsers` built-in validation ([60d8de0](http://git/projects/MAN/repos/nyc-public/commits/60d8de050c83dd063acc543d126830a488edeea0))
* **form-field:** message should not be shown for invalid status ([6eaf79c](http://git/projects/MAN/repos/nyc-public/commits/6eaf79c90a6e7f9a5ec79e34db9b3e9d165d6c3f))
* **input:** has-calendar deps on has-mask, fix js param in has-calendar ([1d44c09](http://git/projects/MAN/repos/nyc-public/commits/1d44c099b67847262fb3cc413fc7e01e2858803c))
* **label:** fix font-size ([c082182](http://git/projects/MAN/repos/nyc-public/commits/c082182fb96af50a03f3af22a785a5cadef7b44f))
* **texarea:** fix style after upd version bem-components ([aaca9a1](http://git/projects/MAN/repos/nyc-public/commits/aaca9a12788a7374fd0839a8a4cab9aab27a3c9b))
* **textarea:** white background color ([a36e074](http://git/projects/MAN/repos/nyc-public/commits/a36e0749233832b5e02ce0af2f19ed663576c9e2))
* **validation:**
  * add crads specs ([c17e260](http://git/projects/MAN/repos/nyc-public/commits/c17e260aed0245fdd23e4817ffb89ee40efa9eae))
  * new cards regex ([6e68b9a](http://git/projects/MAN/repos/nyc-public/commits/6e68b9a3ea87d82b3f3787666842b80d1cf07f77))


#### Features

* ***:** update bem-components ([bd9c5c1](http://git/projects/MAN/repos/nyc-public/commits/bd9c5c12591f2623ecaec919658c50d9990b52ac))
* **i-bem:** disable html escaping ([78626c6](http://git/projects/MAN/repos/nyc-public/commits/78626c6b8ad06ad95b9e3ac683c64feee33615fc))
* **icon:** add tool "close" ([071068b](http://git/projects/MAN/repos/nyc-public/commits/071068bdde9aeb10dbf40d77f3d083871382ede0))
* **input:** format date on input ([2d578d8](http://git/projects/MAN/repos/nyc-public/commits/2d578d800d31819b561d0a67682c7f6bec86e7a7))


<a name"3.1.0"></a>
## 3.1.0 (2015-05-22)


#### Bug Fixes

* **input:** has_calendar style fix' ([d2f39b4](http://git/projects/MAN/repos/nyc-public/commits/d2f39b46a175e5bfeaed9abc327c09aecbd3e743))
* **input-email:** disable default bubble ([46d6857](http://git/projects/MAN/repos/nyc-public/commits/46d6857e92099fa7cdf52b8e7e15e24c25a2a58f))
* **input_has-addon:** applyNext() instead this.ctx.content ([ad130ce](http://git/projects/MAN/repos/nyc-public/commits/ad130ce5cdac4bc68781eeac20e6c65d68c93735))


#### Features

* ***:**
  * last syntax fixes ([d970a86](http://git/projects/MAN/repos/nyc-public/commits/d970a86bf0d25013fdd7a7b727d4a66d59685f91))
  * quotes replaced ([f5edb19](http://git/projects/MAN/repos/nyc-public/commits/f5edb193088046d18249ea5d4cbd25601fc0282e))
  * comments format ([6d816ba](http://git/projects/MAN/repos/nyc-public/commits/6d816bab08478a1927952e31e1713cc6971628ed))
  * deps.js brackets and semicolons ([0820766](http://git/projects/MAN/repos/nyc-public/commits/08207667be9db38e956ccc32053917953dc5a720))
  * new .jscs, and automatic fixing ([568e280](http://git/projects/MAN/repos/nyc-public/commits/568e2803bbb03528f1305b04d6496c8a2501201c))
* **input:** getDate for has_calendar ([6efd0b5](http://git/projects/MAN/repos/nyc-public/commits/6efd0b58ab929f1bef17c94ff428d15def94c978))


<a name"3.0.2"></a>
### 3.0.2 (2015-05-20)


#### Bug Fixes

* **form-field:** form-field size s label alignment fix ([7818e79](http://git/projects/MAN/repos/nyc-public/commits/7818e7919eb52cc136a52ea8dece22b8d0241cab))
* **input-money:** format sum on load ([1113d4c](http://git/projects/MAN/repos/nyc-public/commits/1113d4ca0926a04a6598622c62fd230ec16e3f4d))


<a name"3.0.1"></a>
### 3.0.1 (2015-05-19)


#### Bug Fixes

* **form:** getFieldByName ([958d4ea](http://git/projects/MAN/repos/nyc-public/commits/958d4eaa961f8951029437924af27d6854afe27b))


#### Features

* ***:** optimized SVG images ([8abf41c](http://git/projects/MAN/repos/nyc-public/commits/8abf41cb169d4bd95387491f3a2ccff2dc113a03))


<a name"3.0.0"></a>
## 3.0.0 (2015-05-18)


#### Bug Fixes

* **card-number:** this script is not used (and does not do anything useful anyway) ([a928645](http://git/projects/MAN/repos/nyc-public/commits/a92864507870b4022577968515f329f07676dee7))
* **form-field:** throws error when `validate` is used without `has-validate` ([cbb6044](http://git/projects/MAN/repos/nyc-public/commits/cbb6044ac1319c068ba393ef705c221015a6f6be))


#### Features

* **CHANGELOG.md:** changelog for previous versions ([276b3fe](http://git/projects/MAN/repos/nyc-public/commits/276b3fe445c4240b1a1e26232f5a12c52f71ec67))
* **i-bem:** escape tags in content strings in behtml templates ([dddecfe](http://git/projects/MAN/repos/nyc-public/commits/dddecfe6ea55f31f66c6dd648c2f40eec4bb81d7))
* **input:** format sum for money input ([59f5eb2](http://git/projects/MAN/repos/nyc-public/commits/59f5eb2be21165942a0388c6b68c58e54664ddb2))


#### Breaking Changes

* html tags cannot be used now in bemhtml block's content

 ([dddecfe](http://git/projects/MAN/repos/nyc-public/commits/dddecfe6ea55f31f66c6dd648c2f40eec4bb81d7))


<a name"2.1.1"></a>
### 2.1.1 (2015-05-14)


#### Bug Fixes

* **button:**
  * fix border width disabled button ([2544d83](http://git/projects/MAN/repos/nyc-public/commits/2544d830d24a04ba652a1167efed89f9a433af76))
  * style fix ([35f19a2](http://git/projects/MAN/repos/nyc-public/commits/35f19a2ae3e1e152205ab14bfa874c71456f8c77))
* **calendar:** fix js_inited function ([ff63f74](http://git/projects/MAN/repos/nyc-public/commits/ff63f74161f46d91312367912fa451c26ef3f80f))
* **form-field:** fix style label_size_s inside form-field ([3dba928](http://git/projects/MAN/repos/nyc-public/commits/3dba928f6a2390b9bfbadfd63198acc735e212d8))
* **input_has_calendar:** fix js_inited function ([f8aaf0e](http://git/projects/MAN/repos/nyc-public/commits/f8aaf0e9f9802e944c4e51bad2a22d8b51557aaf))


#### Features

* ***:**
  * part icons demo page ([45f6586](http://git/projects/MAN/repos/nyc-public/commits/45f6586536ec407e5b65400c9fb688660de4c9f5))
  * add all size inputs in popups demo ([91c6fb6](http://git/projects/MAN/repos/nyc-public/commits/91c6fb6d0a8299a2975a43a97e36f26f75cbcc3c))
  * not minifed css in development ([2b14b1e](http://git/projects/MAN/repos/nyc-public/commits/2b14b1e0161222afbfe8a0829bf5bddbb1dc2b67))
  * add popups demo page ([4193eaa](http://git/projects/MAN/repos/nyc-public/commits/4193eaa145538bd4b54e817d8146c032dc279876))
  * fix form demo page ([39e7f55](http://git/projects/MAN/repos/nyc-public/commits/39e7f5572b8feff9003d0eae5ea0be2df591efde))
* **calendar:** add disabled dates ([46ad512](http://git/projects/MAN/repos/nyc-public/commits/46ad51245357412b812e70bb17dcd2108d7830ca))
* **icon:** add search icon ([09a475e](http://git/projects/MAN/repos/nyc-public/commits/09a475e530ac06fff7f3dc1610cfd3958c9ad520))


<a name"2.1.0"></a>
## 2.1.0


#### Bug Fixes

* ***:** ignore __coverage ([b60697c](http://git/projects/MAN/repos/nyc-public/commits/b60697c0ac855e69092862b47b1065de480add0f))
* **button:**
  * minor button style fix ([6806914](http://git/projects/MAN/repos/nyc-public/commits/6806914e939d38c2ce456324c5bc33f2287f0160))
  * button_check color fix ([7ac423d](http://git/projects/MAN/repos/nyc-public/commits/7ac423db7b972b9ce997e933027208e3239e565e))
  * action button border color fix ([09d7e2c](http://git/projects/MAN/repos/nyc-public/commits/09d7e2c449b663898768ceb6d908c1f476c67458))
  * new styles for button ([13d95ca](http://git/projects/MAN/repos/nyc-public/commits/13d95cacb0ec7264199a01fce8d607f8ce311bed))
* **highlight:** AC-5548 default highlight color ([ccd1bf2](http://git/projects/MAN/repos/nyc-public/commits/ccd1bf249bd436b57996e2386f0e6b4aafd40731))
* **input:** dont init calendar fields on a regular input ([d9e94fa](http://git/projects/MAN/repos/nyc-public/commits/d9e94fa60f6fdfa297cd1f830b0fda980e8a18b4))


<a name"2.0.12"></a>
### 2.0.12


#### Bug Fixes

* **card-number:** first-of-type instead of first-child ([74706ca](http://git/projects/MAN/repos/nyc-public/commits/74706ca66265c010357707022b8a8377534b40a7))
* **highlight:** fix color ([813fde8](http://git/projects/MAN/repos/nyc-public/commits/813fde87d7a4d53a3a90177ae88a837e81ac8af6))
* **input:** AC-5549 use setVal instead of elem.val() ([44c9521](http://git/projects/MAN/repos/nyc-public/commits/44c952145295d36479872c799ea446eebac0d2ec))


#### Features

* **calendar:**
  * add theme alfa ([8302668](http://git/projects/MAN/repos/nyc-public/commits/83026688b0c158db417b574d485d72561bef7d1b))
  * add calendar ([47c1d0d](http://git/projects/MAN/repos/nyc-public/commits/47c1d0d7d1bdd4d3db162393955ae276d23f00ed))


<a name"2.0.11"></a>
### 2.0.11


#### Bug Fixes

* **notification:** view ([7ab2e0a](http://git/projects/MAN/repos/nyc-public/commits/7ab2e0a9672185bc375089566097c5365c216e6b))


<a name"2.0.10"></a>
### 2.0.10


#### Bug Fixes

* **notification:** view ([c61e0c9](http://git/projects/MAN/repos/nyc-public/commits/c61e0c92cc8fa75a052220892a0825a78ef861fd))


<a name"2.0.9"></a>
### 2.0.9


#### Bug Fixes

* **form-field:** show validation message immediately ([a10a609](http://git/projects/MAN/repos/nyc-public/commits/a10a609be6e1c0a762b4d0ce3dffdcf797a732af))
* **input:**
  * empty list bug + select hidden item bug ([e92b9b5](http://git/projects/MAN/repos/nyc-public/commits/e92b9b57d1b510aab294583d39f7e1de0b0454a6))
  * disable autocomplete for default input ([6af2ba0](http://git/projects/MAN/repos/nyc-public/commits/6af2ba00168885ac2ffda93eac0dcb0fec26e1ae))
  * add type text for default input ([d0ab5eb](http://git/projects/MAN/repos/nyc-public/commits/d0ab5ebe5b6d4161881cb128072c0893ad858198))
  * mode link bkg ([66aee91](http://git/projects/MAN/repos/nyc-public/commits/66aee916e6806bc89ae64e59ef27089753594582))
  * mode link hovered color ([8b57be9](http://git/projects/MAN/repos/nyc-public/commits/8b57be9d2444a4c564e3f9c50b10f647cd907572))
  * mode link focused color ([e931bf8](http://git/projects/MAN/repos/nyc-public/commits/e931bf82097f279e508f6698c3a13cb164af75c6))
  * invalid color, focused color ([41afd18](http://git/projects/MAN/repos/nyc-public/commits/41afd18d7c01e46df49f52f26426ec1b69d0a924))
* **validation:** right regular expression for email validator ([6203994](http://git/projects/MAN/repos/nyc-public/commits/62039947be90864539ce22ac166d8e7c24c06114))


<a name"2.0.8"></a>
### 2.0.8


#### Features

* **font:** load fonts localy ([93c522b](http://git/projects/MAN/repos/nyc-public/commits/93c522bc2da83b0d36985e33a20c287af27bd817))
* **input:** remove html5 validations ([6750558](http://git/projects/MAN/repos/nyc-public/commits/6750558419833b434479a3fb40f9d33dfaa3298c))


<a name"2.0.7"></a>
### 2.0.7


<a name"2.0.6"></a>
### 2.0.6


#### Bug Fixes

* **form-field:** AC-5271 validate field only when it`s dirty ([75f9d54](http://git/projects/MAN/repos/nyc-public/commits/75f9d54e0f19d2ec24024b19c6046c397b89f413))


<a name"2.0.5"></a>
### 2.0.5


#### Bug Fixes

* **input-mode-link:** bkg-white color fix ([dd04598](http://git/projects/MAN/repos/nyc-public/commits/dd045984d7c19400d14fe4b1f0e63c0fe0b90a29))


<a name"2.0.4"></a>
### 2.0.4


#### Bug Fixes

* **button:** set margin ([c5d0a26](http://git/projects/MAN/repos/nyc-public/commits/c5d0a26e02a8a7589762843d917a8de83196706f))
* **notification:** push after push ([0dc2188](http://git/projects/MAN/repos/nyc-public/commits/0dc218825925feefc13b88766975f76cbaf897f0))


<a name"2.0.3"></a>
### 2.0.3


#### Features

* **notification:** block for notifications ([8c73f3d](http://git/projects/MAN/repos/nyc-public/commits/8c73f3d4fc87dc02ecb29ceb93bd4130ae359260))


<a name"2.0.2"></a>
### 2.0.2


#### Bug Fixes

* **form-field:** deps fix ([5e40fbb](http://git/projects/MAN/repos/nyc-public/commits/5e40fbb75b709aaa3f97390eca0a7564e6c78c46))


#### Features

* **header:**
  * add support element ([7aa92dc](http://git/projects/MAN/repos/nyc-public/commits/7aa92dcf6b45bba3b5b014381ecf91fe82dd8f7f))
  * check data ([c668336](http://git/projects/MAN/repos/nyc-public/commits/c6683363f4174a84c1cd7a6cfeba34884201e954))


<a name"2.0.1"></a>
### 2.0.1


<a name"2.0.0"></a>
## 2.0.0


#### Bug Fixes

* **card-number:**
  * margin ([5476fd5](http://git/projects/MAN/repos/nyc-public/commits/5476fd5d0b2c99da7d6b74bd5ce9a6ef9d6099a9))
  * * to css ([f3f8e35](http://git/projects/MAN/repos/nyc-public/commits/f3f8e357c61aa13e5ac475c5af3b7b8ab21e7d71))
* **icon:** close icon opacity; helper icon ([b9a28d2](http://git/projects/MAN/repos/nyc-public/commits/b9a28d279532a4e4eb234727f262863a6d0ab21e))


#### Features

* **app:** add common app block ([9dd4299](http://git/projects/MAN/repos/nyc-public/commits/9dd4299886cb5acf3e28221acd202dd2f9634fcc))
* **input:** use jquery.formatter plugin instead of jquery.mask ([8370e97](http://git/projects/MAN/repos/nyc-public/commits/8370e974788d8db09e144dee435f7280cf27ddf9))


#### Breaking Changes

* input__has-mask mask format changed!

 ([8370e97](http://git/projects/MAN/repos/nyc-public/commits/8370e974788d8db09e144dee435f7280cf27ddf9))

