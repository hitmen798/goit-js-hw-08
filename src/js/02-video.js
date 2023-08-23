import Player from '@vimeo/player';
import { throttle } from 'lodash';

// Знаходження iframe на сторінці
const iframe = document.querySelector('iframe');

// Ініціалізація бібліотеки плеєра
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

// Запис ключа до сховища
const localStorageKey = 'videoplayer-current-time';

// Відстеження події timeupdate - оновлення часу відтворення
player.on(
  'timeupdate',
  throttle((e) => {
    // Збереження часу відтворення у локальне сховище
    localStorage.setItem(localStorageKey, e.seconds); // Час відтворення оновлюється у сховищі не частіше, ніж раз на секунду
  }, 1000)
);

// Перевірка наявності методу setCurrentTime та відновлення часу відтворення зі збереженої позиції під час перезавантаження сторінки.
if (player.setCurrentTime) {
  const currentTime = localStorage.getItem(localStorageKey);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}