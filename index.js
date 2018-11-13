import pkgJson from './package.json'
import { actionMixin, registerComponent } from 'maka'
import './style.less'
const name = pkgJson.name

const state = {
    data: {
        name: 'Hood Robin',
        age: 18,
        currency: [
            {
                value: 'USD',
                label: '$',
            },
            {
                value: 'EUR',
                label: '€',
            },
            {
                value: 'BTC',
                label: '฿',
            },
            {
                value: 'JPY',
                label: '¥',
            },
        ]

    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onChange = (e) => {
        if (e.target.id == 'name') {
            this.base.setState({ 'data.name': e.target.value })
        }
        else if (e.target.id == 'age') {
            this.base.setState({ 'data.age': e.target.value })
        }

    }
}

const view = {
    component: 'div',
    className: 'cxb-saleorder',
    children: [{
        component: 'H1',
        children: 'XXX Company Sales Order',
        style: { textAlign: 'center' }
    }, {
        component: 'div',
        className: 'header',
        children: [{
            component: 'material.TextField',
            label: 'Name',
            id: 'name',
            className: 'textField',
            value: '{{data.name}}',
            onChange: '{{$onChange}}',
            margin: 'normal'

        }, {
            component: 'material.TextField',
            label: "Uncontrolled",
            defaultValue: "foo",
            className: 'textField',
            margin: 'normal'

        }, {
            component: 'material.TextField',
            required: true,
            label: "Required",
            defaultValue: "Hello World",
            className: 'textField',
            margin: 'normal'

        }, {
            component: 'material.TextField',
            error: true,
            label: "Error",
            defaultValue: "Disabled",
            className: 'textField',
            margin: 'normal'

        }, {
            component: 'material.TextField',
            disabled: true,
            label: "Disabled",
            defaultValue: "Disabled",
            className: 'textField',
            margin: 'normal'

        }, {
            component: 'material.TextField',
            type: "password",
            label: "Password",
            autoComplete: "current-password",
            className: 'textField',
            margin: 'normal'

        }, {
            component: 'material.TextField',
            label: "Read Only",
            defaultValue: "Hello World",
            margin: 'normal',
            className: 'textField',
            InputProps: {
                readOnly: true
            }
        }, {
            component: 'material.TextField',
            label: "Helper text",
            defaultValue: "Default Value",
            margin: 'normal',
            helperText: 'Some important text',
            className: 'textField'
        }, {
            component: 'material.TextField',
            label: "Helper text",
            Placeholder: "Placeholder",
            margin: 'normal',
            className: 'textField'
        }, {
            component: 'material.TextField',
            label: "Number",
            value: "{{data.age}}",
            margin: 'normal',
            id: 'age',
            type: 'number',
            onChange: '{{$onChange}}',
            className: 'textField',
            InputLabelProps: {
                shrink: true
            }
        }, {
            component: 'material.TextField',
            label: "Search field",
            type: "search",
            margin: 'normal',
            className: 'textField'
        }, {
            component: 'material.TextField',
            select: true,
            label: "Select",
            id: 'currency',
            value: "{{data.currency}}",
            onChange: '{{$onChange}}',
            margin: 'normal',
            SelectProps: {
                MenuProps: {
                    className: 'selectMenu'
                }
            },
            helperText: "Please select your currency",
            children: {
                _for: 'item in data.currency',
                component: 'MenuItem',
                children: '{{item.label}}'
            }
        }, {
            name: 'div',
            component: 'hr',
            className: 'split'
        }, {
            component: 'material.TextField',
            label: "Multiline",
            style: {},
            multiline: true,
            rows: 2,
            defaultValue: "Please Input...",
            margin: 'normal',
            className: 'fullRow',
        },]
    }]
}

export {
    name,
    state,
    action,
    view
}