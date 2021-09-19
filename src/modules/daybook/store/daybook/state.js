export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta quod incidunt tempora doloremque explicabo laudantium modi quibusdam, officia magnam fugit culpa accusamus optio assumenda veritatis accusantium numquam architecto doloribus.',
            picture: null
        },
        {
            id: new Date().getTime() + 1,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, minus impedit. Distinctio facilis libero ipsam tempore cupiditate, rerum, laborum voluptas provident aperiam dolor, ducimus perspiciatis! Magnam saepe sunt fugit quisquam.",
            picture: null
        },
        {
            id: new Date().getTime() + 2,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla, in maxime tempora soluta, facilis modi consequuntur saepe ratione placeat fugiat illum ducimus nihil. Fuga dolor aperiam nihil doloremque quos!',
            picture: null
        },
        {
            id: new Date().getTime() + 3,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sed mollitia temporibus, dolor, iusto aliquam quaerat molestiae perferendis soluta nihil quis. Molestias, hic. Ab nam blanditiis unde modi non iure!',
            picture: null
        }
    ]
})