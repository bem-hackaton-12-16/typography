# blockquote

Блок предоставляет компонент интерфейса для отображения цитируемого текста.

## Обзор блока

### Специализированные поля блока

>Пример последовательности полей: `name`, `val`, `text`, `url`, `icon`, `title`, `id`, `tabIndex`.

>Возможные типы данных: String, Number, Boolean, Array, BEMJSON.

| Поле | Тип | Описание |
| ---- | --- | -------- |
| [content](#declfields-content) | String | Цитируемый текст. |
| ---- | --- | -------- |
| [source](#declfields-source) | String | Источник цитаты. |

## Подробное описание

<a name="declfields"></a>
### Специализированные поля блока

<a name="declfields-content"></a>
#### Поле `content`

Тип: `String`.

Обязательное поле. 

Задает текст цитаты.

```js
...
{ 
    block: 'blockquote', 
    content: 'Hello world' 
}
```

<a name="declfields-source"></a>
#### Поле `source`

Тип: `String`.

Значение по умолчанию: —

Задает источник цитаты.

```js
...
{ 
    block: 'blockquote', 
    content: 'Hello world with footer', 
    source: 'by BEM' 
}
```
