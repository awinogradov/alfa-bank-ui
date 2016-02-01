# Media queries

Based on [mq from bem-grid](https://github.com/bem-incubator/bem-grid/tree/master/common.blocks/mq).

## Брейкпоинты
{ font-size = 16px };

`0 - 640 - 1024 - 1440 - 1920`

- `--small`         0 - 100%
- `--small-only`    0 - 640px;

- `--medium`        641px - 100%
- `--medium_only`   641px - 1024px

- `--large`         1025px - 100%
- `--large_only`    1025px - 1440px

- `--xlarge`        1441px - 100%
- `--xlarge_only`   1441px - 1920px

- `--xxlarge`       1920px - 100%
- `--xxlarge_only`  1920px - 100%

## Usage

```css
@media (--medium) {
    .page__content {
        width: 1000px;
    }
}

@media (--large) {
    .page__content {
        padding-left: 100px;
    }
}
```
