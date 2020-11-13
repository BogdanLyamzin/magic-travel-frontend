import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExamplePage } from '../../client/example/pages/ExamplePage';
import  SpecialTours  from '../../client/SpecialTours/pages/SpecialTours';
import  TourPage  from '../../client/TourPage/pages/TourPage';

const cardTemplate = {
  name: "МОРСЬКА РИБАЛКА НА СЕРЕДНЮ РИБУ",
  price: "350",
  description: "Чорногорія - одна з кращих європейських країн, де природою і людиною створені всі умови для чудової риболовлі. Тепле Адріатичне море - це обитель більше 40 видів морських риб, косяками розсікають підводні простори. Риболовля в Чорногорії є одним з основних захоплень місцевих жителів і популярним видом туристичного відпочинку. На спеціально обладнаних рибальським спорядженням судах тут можна випробувати свою удачу і вправність будь-яким способом рибної ловлі: троллінгом, спінінгом, дрифтингом, ловом нахлистом або на донку. Відчути небувалий азарт від вдалої морського полювання на зубатку, марліну, рибу-меч, королівського тунця і відобразити на фото виловлені трофеї можна в турі «Чорногорія - азартний відпочинок на морській рибалці на середню рибу». Тур починається вильотом з аеропорту і приземленням в аеропорту Чорногорії за місцевим часом. Вас зустрічає приймаюча сторона і забезпечує трансфер групи в пункт призначення. Відповідно до міжнародних правил, після 14:00 група поселяється в обраний готель або апартаменти. Вечір надано для відпочинку в готелі, знайомство з курортним містом і підготовці до майбутньої риболовлі.",
  keys: "[sea, fishing, montenegro]",
  img:"fishing1.jpeg"
}

export const AppRoutes = () => {
  const [card, setCard] = useState(cardTemplate);
  return (
    <Switch>
      <Route exact path="/">
        <ExamplePage />
      </Route>
      <Route exact path="/foo">
        <p>BAR</p>
      </Route>
      <Route exact path="/st">
        <SpecialTours setCard={setCard}/>
      </Route>
      <Route path="/specialtour">
        <TourPage card={card}/>
      </Route>
    </Switch>
  );
};
