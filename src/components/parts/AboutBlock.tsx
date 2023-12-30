import '../../style/components/parts/AboutBlock.scss'; // Sassファイルをインポート
import Profile from '../../assets/profile.jpg';

const AboutBlock = () => {
    return (
        <div className="profile-container">
            <img src={Profile} alt="Profile Image" className="profile-image" />
            <div className="profile-info">
                <p>名前：　大城　海斗</p>
                <p>年齢：　25</p>
                <p>GitHub：　<a href="https://github.com/kaitoohsiro" target="_blank" rel="noopener noreferrer">github</a></p>
                <p>Qiita：　<a href="https://qiita.com/kaito_111" target="_blank" rel="noopener noreferrer">qiita</a></p>
                {/* 他に表示させたい情報を追加 */}
            </div>
        </div>
    );
};

export default AboutBlock;
