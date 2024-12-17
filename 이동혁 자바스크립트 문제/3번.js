/*
    문제 의도: map 익히기, date 익히기

    문제: 우리가 호스팅 회사를 운영하고 있습니다.
    매년 물가 상승으로 인해 모든 제품의 가격을 조금씩 올리고 있습니다.
    근데 매년 가격을 바꾸려고 하니 귀찮기도 하고 까먹기도 합니다.

    price 배열에 현재 날짜 기준으로 가격이 매겨져있습니다.
    매년 자동으로 가격이 오르도록 설정해보세요!

    조건)
    매년 5%인상

*/

const price = [
    {
        name: 'Web hosting',
        value: 10000
    },
    {
        name: 'Vps hosting',
        value: 30000
    },
    {
        name: 'Cloud hosting',
        value: 200000
    }
];

const newPrice = [];
