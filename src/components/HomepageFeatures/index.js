import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
    {
        title: 'PostgreSQL',
        src: require('@site/static/img/postgresql.png').default,
        description: <>Самая продвинутая реляционная база данных.</>
    },
    {
        title: 'Elasticsearch',
        src: require('@site/static/img/elastic.png').default,
        description: (
            <>
                База данных, ориентированная на максимально быстрый поиск по произвольным комбинациям параметров, а так
                же текстовый поиск.
            </>
        )
    },
    {
        title: 'MongoDB',
        src: require('@site/static/img/mongodb.png').default,
        description: <>Популярная документо-ориентированная база данных.</>
    },
    {
        title: 'Redis',
        src: require('@site/static/img/redis.png').default,
        description: <>in-memory key-value база данных.</>
    },

    {
        title: 'Prometheus',
        src: require('@site/static/img/prometheus.png').default,
        description: <>time-series база данных для хранения метрик.</>
    },
    {
        title: 'Loki',
        src: require('@site/static/img/loki.png').default,
        description: <>Система сбора, хранения и поиска логов.</>
    }
]

function Feature({ src, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className='text--center'>
                <img className={styles.featureSvg} src={src} />
            </div>
            <div className='text--center padding-horiz--md'>
                <Heading as='h3'>{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className='container'>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
