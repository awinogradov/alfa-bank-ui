# Fieldset

Layout for form-fields groups. `legend` options can contain `heading_size_s`, 
`link_size_l` and `paragraph` blocks. Use `link` like `heading`.

```bemjson
{
    block : 'fieldset',
    legend : 'form part 1',
    content: [
        // ... form fields here
    ]
}
```

## Special modes

Options for BEMJSON:

<table>
    <tr>
        <th>Option</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>legend</td>
        <td>
            <code>Bemjson</code>
        </td>
        <td>add block `link` or `heading` or `paragraph`</td>
    </tr>
</table>

