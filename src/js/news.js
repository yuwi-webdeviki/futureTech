import '/scss/news.scss'
import Burger from './components/burger'
import Navigation from './components/navigation'
import { usePostsSwiper } from './components/slider'
import VideoPlayerCollection from './components/news/VideoPlayer'

new Burger()
new Navigation()
usePostsSwiper()
new VideoPlayerCollection()