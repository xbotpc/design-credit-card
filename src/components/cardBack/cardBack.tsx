import { ReactComponent as StarPattern } from '../../images/star-filled.svg';
import { ReactComponent as CompanyNameIcon } from '../../images/visa.svg';
import styles from './cardBack.module.scss';

interface CardBackProps {
    cardBGColor: string;
    bgImageSize: string;
    opacity: string;
    patternColor?: string;
}

const CardBack = ({ cardBGColor, bgImageSize, opacity, patternColor }: CardBackProps) => {
    return (
        <div id={'cardBack'} className={styles.cardContainer} style={{ backgroundColor: cardBGColor }}>
            <div className={styles.bgImage}>
                <StarPattern width={`${(parseInt(bgImageSize, 10) + 100).toString()}%`} opacity={`${opacity}%`} />
            </div>
            <div className={styles.header}>
                <div className={styles.magneticStrip} />
                <div className={styles.signaturePanel}>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.horizontalLine}></div>
                </div>
            </div>
        </div>
    )
}

export default CardBack;

