import { useSelector } from 'react-redux';
import { ReactComponent as StarPattern } from '../../images/star-filled.svg';
import { ReactComponent as CompanyNameIcon } from '../../images/visa.svg';
import initialState from '../../types/initialState';
import styles from './cardFront.module.scss';

interface CardFrontProps {
    bgImageSize: string;
    opacity: string;
    patternColor?: string;
}

const CardFront = ({ bgImageSize, opacity, patternColor }: CardFrontProps) => {
    const { bgColor } = useSelector((state: initialState) => state);
    console.log('aa', bgColor);
    return (
        <div id={'cardFront'} className={styles.cardContainer}>
            <div className={styles.card} style={{
                backgroundColor: bgColor
            }}>
                <div className={styles.blackGradient} />
                <div className={styles.bgImage}>
                    {/* <StarPattern width={`${(parseInt(bgImageSize, 10) + 100).toString()}%`} opacity={`${opacity}%`} /> */}
                </div>
                <div className={styles.header}></div>
                <div className={styles.footer}>
                    <div className={styles.section}>
                        <div className={styles.cardNumbers}>
                            <div className={styles.numberSection}>
                                <div className={styles.number}>4</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                            </div>
                            <div className={styles.numberSection}>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                            </div>
                            <div className={styles.numberSection}>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                            </div>
                            <div className={styles.numberSection}>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                            </div>
                        </div>
                        <div className={styles.expiryContainer}>
                            <div className={styles.validThru}>
                                Valid Thru
                        </div>
                            <div className={styles.expiryDate}>12/23</div>
                        </div>
                    </div>
                    <CompanyNameIcon />
                </div>
            </div>
        </div>
    )
}

export default CardFront;

