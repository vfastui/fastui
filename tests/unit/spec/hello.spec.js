const UT = require('@vue/test-utils')

// The component to test
const MessageComponent = {
    template: '<p>{{ msg }}</p>',
    props: ['msg']
}

test('displays message', () => {
    const wrapper = UT.mount(MessageComponent, {
        props: {
            msg: 'Hello world'
        }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello world')
})
