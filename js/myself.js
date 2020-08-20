window.addEventListener('DOMContentLoaded', function () {


    // Создаем нужные нам переменные
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');


    // Создаем функцию для скрытия элементов на страницу с помощью созданных выше
    // переменных и с помощтю создаенных заранее классом с нужными css свойствами
    function hideTabsContent() {
        tabsContent.forEach(item => { //перебираем все элементы псевдомассива
            item.classList.add('hide'); // добавляем каждому класс с display: none;
            item.classList.remove('show', 'fade');// убираем у каждого класс с display: block;
            // а так же класс с анимацией
        });

        tabs.forEach(item => { // Перебираем все элементы псевдомассива
            item.classList.remove('tabheader__item_active');//убираем у каждого класс который подсвкечивает активный таб
        });
    }

    // создаем функцию для показа элементов
    function showTabsContent(i = 0) { //i=0 значит что по умолчанию i=0 если аргумент у функции отсутствует
        tabsContent[i].classList.add('show', 'fade'); //добавлдяем класс с isplay: block; и класс с анимацией
        // элементу псевдомассива с индексом [i]
        tabsContent[i].classList.remove('hide'); // убираем класс с display;none у элемента с индексом [i]
        tabs[i].classList.add('tabheader__item_active'); // добавляем класс для подсветки активного элемента
    }

    hideTabsContent(); // вызываем функции при загрузке странице соответственно сначала у всех элементов псевдомассивов
    // display:none по умолчанию 
    showTabsContent(); // а здесь добавляется display:block а так же класс для подсветки а так же 
    // класс для подсветки активного эелемента элементу с индексом [0]

    tabsParent.addEventListener('click', (event) => { // назначаем отслеживание событя клика на родителя табов
        const target = event.target; // создаем переменную для упрощения записи следующих функции

        if (target && target.classList.contains('tabheader__item')) { // создаем условие при котором будут добавляться или удаляться 
            // классы если target true и если target содержит класс наших табов то (делегирование событий)
            tabs.forEach((item, i) => { //перебираем все элементы (табы) псевдомассива tabs i здесь это индекс
                if (target == item) { // если  target клика внутри родителя равен элементу псевдомассива
                    // вызываем следующие функции
                    hideTabsContent(); // сначала все элементы прячутся
                    showTabsContent(i); // потом работает функция для добавления классов с display: block
                    // конкретному элементу на который кликнул пользователь 
                }
            });
        }
    });

});