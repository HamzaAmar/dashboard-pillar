import { getRandomNameAndAvatarUser } from '@api/user'
import { getDate } from '@utils/date'

import type { NotificationDTO } from './notification'

export const NOTIFICATION_LIST: NotificationDTO[] = [
  {
    id: 'notification-1',
    type: 'friends',
    request: 'like',
    unread: true,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur voluptatibus a necessitatibus rem neque fugiat, voluptas sed quas maiores enim earum voluptate? Perspiciatis accusamus porro sint ipsam consequuntur nostrum veritatis!',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ hours: -1 }),
  },

  {
    id: 'notification-2',
    type: 'friends',
    request: 'comments',
    unread: false,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga unde consequuntur similique, est eius expedita repellat eos nam laudantium veritatis quasi explicabo nisi doloribus quidem tempore repellendus odit, dignissimos natus.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ hours: -2 }),
  },
  {
    id: 'notification-3',
    type: 'friends',
    request: 'like',
    unread: false,
    description:
      'ducimus nisi quibusdam eligendi eveniet nulla soluta laborum dolore dolorum explicabo consequatur similique obcaecati earum, laudantium repudiandae fuga quod dicta! Voluptates, repudiandae aspernatur error voluptas atque esse. Quidem, cupiditate, aliquid exercitationem dolore laborum adipisci ratione voluptates in, sint nihil beatae. Enim quam quaerat facilis, optio id ratione praesentium laudantium fugiat. Maxime, consectetur, nulla voluptatibus asperiores, odit praesentium tenetur non assumenda pariatur eligendi alias adipisci. Officia modi adipisci repudiandae necessitatibus rem quam hic beatae, eaque, natus fuga quisquam labore aliquid ipsa consectetur, accusamus vitae quas id at dolorum suscipit minima amet itaque! Expedita eligendi hic reiciendis, soluta at possimus quas quo eaque exercitationem labore voluptate repellat quod sint dolores nesciunt. Quisquam quam dignissimos iure? Maxime at doloremque quis! Quibusdam corrupti consectetur cumque! Voluptatum est beatae sunt deserunt recusandae porro error repellat. Aspernatur in repudiandae rerum provident, quasi necessitatibus debitis hic. Neque aut tenetur autem vero minima cum minus pariatur officia quis laborum quibusdam ratione asperiores expedita distinctio dolor tempore unde ex, nam ad voluptate animi maxime perferendis exercitationem porro? Ratione veritatis sunt omnis quasi debitis commodi necessitatibus delectus facere harum dicta eum obcaecati, iure, deleniti voluptas nisi. Aperiam reiciendis earum exercitationem, asperiores ipsum dolorem cumque tempore quis accusantium nam aspernatur, sapiente cupiditate? Ipsa fugiat pariatur deserunt libero incidunt non, praesentium quibusdam totam error odit molestias quam quidem sunt aspernatur nam excepturi. Ducimus libero a neque doloribus consectetur similique, quia alias facere magni dicta accusantium et officiis, quis voluptatum aspernatur eius ad quos dolorem animi! Facilis architecto vel exercitationem neque, ab atque corporis dolore quas rerum? Labore minus enim quia, a debitis illum dolorum. Velit cupiditate quas consequuntur perferendis voluptates odio accusamus corrupti, ipsam, blanditiis omnis eveniet! Corporis, maiores tempore itaque, aperiam molestias cupiditate quia voluptas doloribus laudantium et modi temporibus harum',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ hours: -1.25 }),
  },
  {
    id: 'notification-4',
    type: 'groups',
    request: 'suggest',
    unread: false,
    description: 'dolor sit, amet consectetur adipisicing elit. Sint blanditiis',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ hours: -1.15 }),
  },
  {
    id: 'notification-5',
    type: 'groups',
    request: 'join',
    unread: false,
    description: 'maxime, nemo laborum quae voluptate quidem totam fugiat illo eligendi nisi',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -30 }),
  },
  {
    id: 'notification-6',
    type: 'pages',
    request: 'join',
    unread: false,
    description:
      'reprehenderit a, obcaecati possimus? Cupiditate vel similique dolores ducimus error earum sed repudiandae nisi excepturi illum delectus quasi',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -45 }),
  },
  {
    id: 'notification-7',
    type: 'pages',
    request: 'like',
    unread: false,
    description:
      'Eveniet est qui voluptate dolores libero quis incidunt, provident illo repellendus praesentium distinctio aliquam iste, laboriosam quaerat',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -12 }),
  },
  {
    id: 'notification-8',
    type: 'pages',
    request: 'join',
    unread: true,
    description:
      'inventore, voluptates explicabo amet perferendis error assumenda rem labore deserunt asperiores fugit! Necessitatibus veniam nemo aperiam distinctio hic atque quasi ipsum explicabo, aut exercitationem',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -18 }),
  },
  {
    id: 'notification-9',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      'fuga error ea tenetur? Vitae maiores aliquid est eaque? Asperiores ad sapiente totam, omnis quia, itaque veniam dolore vel aspernatur libero maxime',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -1 }),
  },
  {
    id: 'notification-10',
    type: 'events',
    request: 'suggest',
    unread: true,
    description:
      ' blanditiis dolor facilis numquam qui neque voluptatum veritatis voluptatibus tempore sint eum commodi pariatur ea, iure ipsum sequi repellendus rerum nam.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ days: -1 }),
  },
  {
    id: 'notification-11',
    type: 'groups',
    request: 'like',
    unread: true,
    description:
      'ducimus nesciunt? Natus nisi odit, quos consequatur veritatis molestiae distinctio corrupti facere blanditiis quidem labore aliquam sit velit praesentium illum.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ days: -0.15 }),
  },
  {
    id: 'notification-12',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      'Ullam commodi repellat voluptas tenetur rerum doloribus facilis, fugit quas voluptatem, at optio voluptates soluta a quibusdam eius enim odit eveniet facere. Enim sapiente adipisci quae vel porro obcaecati qui tenetur corporis deleniti',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ days: -0.02 }),
  },
  {
    id: 'notification-13',
    type: 'groups',
    request: 'like',
    unread: true,
    description:
      ' dolorem et iste pariatur debitis architecto ipsum commodi nostrum quas saepe earum maxime perferendis eligendi rerum nihil obcaecati. ',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ days: -0.2 }),
  },
  {
    id: 'notification-14',
    type: 'groups',
    request: 'suggest',
    unread: true,
    description:
      ' dolorem et iste pariatur debitis architecto ipsum commodi nostrum quas saepe earum maxime perferendis eligendi rerum nihil obcaecati. ',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -22 }),
  },
  {
    id: 'notification-15',
    type: 'groups',
    request: 'suggest',
    unread: true,
    description:
      'omnis molestias earum rem est veritatis eveniet! Accusantium amet quaerat laboriosam adipisci explicabo placeat animi laborum praesentium at',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -19 }),
  },
  {
    id: 'notification-16',
    type: 'groups',
    request: 'like',
    unread: true,
    description:
      'aperiam voluptatibus autem explicabo minima itaque quam suscipit sunt nulla laboriosam dicta! Voluptate error voluptates quibusdam perspiciatis voluptatem, temporibus, quibusdam, consectetur accusantium',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -18 }),
  },
  {
    id: 'notification-17',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      'Non ipsam aliquid corrupti consequatur recusandae tenetur harum, tempore, delectus quidem aliquam vero quis. Repudiandae earum, harum, enim quaerat odio reprehenderit',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ hours: -17 }),
  },
  {
    id: 'notification-18',
    type: 'friends',
    request: 'comments',
    unread: true,
    description:
      ' quod hic corporis, explicabo asperiores! Accusamus mollitia pariatur deleniti consectetur a repellat rem officiis nulla ad sit minus ipsam error nihil, omnis natus, non asperiores modi nemo animi commodi similique.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ hours: -2 }),
  },
  {
    id: 'notification-19',
    type: 'friends',
    request: 'comments',
    unread: true,
    description:
      ' cupiditate eveniet quisquam porro! At, perspiciatis aliquid, laborum assumenda recusandae non ipsum, minus deleniti consequatur exercitationem debitis voluptatibus suscipit repellat. Ullam error molestiae voluptates.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ days: -5 }),
  },
  {
    id: 'notification-20',
    type: 'friends',
    request: 'like',
    unread: true,
    description:
      ' delectus in ipsum, laboriosam officia beatae perferendis Deleniti veritatis Recusandae maxime, repellat maiores nobis itaque unde corrupti inventore ab?',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ hours: -32 }),
  },
  {
    id: 'notification-21',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      'Vitae, consequuntur odio voluptate fuga labore rem enim dolores totam temporibus eligendi quo possimus maxime aperiam aliquid, animi quod. Alias doloremque ipsa hic consectetur officia earum nisi quae, ipsum molestiae.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ month: -1 }),
  },
  {
    id: 'notification-22',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      'dolor accusamus, iure facilis ut quasi nihil Molestiae nobis impedit ad alias placeat eligendi qui repudiandae, quos doloribus officia, animi sint? Earum placeat voluptatum commodi maxime ratione doloribus, rerum odio.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ month: -0.123 }),
  },
  {
    id: 'notification-23',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      'sapiente unde odio quas, pariatur, consequuntur laboriosam quidem in vel voluptate iure cumque quis harum assumenda atque sint voluptatibus quo tempore. ',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ month: -0.11 }),
  },
  {
    id: 'notification-24',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      'Velit natus pariatur culpa placeat at quidem amet fugiat incidunt tenetur repellendus hic veritatis praesentium, dolore corporis neque. Commodi ex minima ullam iure.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ hours: -0.1 }),
  },
  {
    id: 'notification-25',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      ' Accusamus soluta eos quos sed totam quia voluptas libero repudiandae quis, eligendi ea reprehenderit suscipit impedit dignissimos quibusdam.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ hours: -22 }),
  },
  {
    id: 'notification-26',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      ' odit? Alias ipsum reprehenderit dolores autem earum repudiandae at labore fugiat esse nihil facilis debitis ab illum voluptate repellendus incidunt, est necessitatibus iste in, sed minima velit commodi praesentium.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ hours: -19 }),
  },
  {
    id: 'notification-27',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      ' corporis excepturi adipisci est harum molestias sint earum aliquid quis debitis libero, distinctio molestiae rem ullam eligendi quod, fuga voluptas',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -22 }),
  },
  {
    id: 'notification-28',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      'recusandae ullam ducimus ratione ea! Eaque ex commodi unde sint adipisci eveniet obcaecati fuga labore laboriosam nobis, libero voluptates deserunt accusamus eligendi maxime ullam at, distinctio temporibus quaerat.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -14 }),
  },
  {
    id: 'notification-29',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      ' sequi rem architecto ipsum soluta praesentium tenetur odio distinctio eveniet quisquam! Eum saepe deserunt, ratione necessitatibus a animi officia! Vel, obcaecati! Eius quae minus quo necessitatibus magnam dolore ',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ minutes: -20 }),
  },
  {
    id: 'notification-30',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      'provident in eligendi repellat repellendus dolores obcaecati? Tempore accusamus dolorum qui at necessitatibus amet aliquam, nemo voluptate blanditiis aspernatur non voluptates eligendi iure ipsa facilis nostrum quas, sint tenetur atque.',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ month: -1 }),
  },
  {
    id: 'notification-31',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      ' tenetur perspiciatis? Exercitationem quaerat quibusdam, neque a reprehenderit cupiditate mollitia, magni sapiente et reiciendis labore. Laborum culpa fugit',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ month: -9 }),
  },
  {
    id: 'notification-32',
    type: 'events',
    request: 'like',
    unread: true,
    description:
      ' nesciunt praesentium, aut magni quisquam cupiditate inventore saepe earum exercitationem? Ab, eaque distinctio eligendi voluptatibus possimus,',
    user: getRandomNameAndAvatarUser(),
    date: getDate({ month: -1.5 }),
  },
]
