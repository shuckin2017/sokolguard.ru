import React from 'react'

interface Props {}

export const YandexMap = (props: Props) => {
    return (
        <div>
            <iframe
                title="yandexmap"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A35fe2fee5ee0a0a37a95bf435392d389ba6f1ab38c393e076a7beac33a4e0122&amp;source=constructor"
                width="100%"
                height="626"
            ></iframe>
        </div>
    )
}
