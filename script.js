document.addEventListener('DOMContentLoaded', function() {
    // エージェントプロフィールデータ
    const agentProfiles = {
        nazo: {
            name: '謎兎（NazoUsagi）',
            title: 'ビジネス系のうさぎエージェント',
            image: 'nazo_rabbit.png',
            brand: 'COMETイーク',
            description: `
                <div class="profile-section">
                    <h4>プロフィール</h4>
                    <p>新卒ITエンジニア→AIエンジニア、DS→AIコンサルタントと経験を積み、大手企業向けAI支援を軸に個人事業も運営しています。</p>
                    <p>会社員×個人事業主の10年超ハイブリッドキャリアで複数収入を構築。IT・AI人材の市場価値最大化メソッドを発信中です。</p>
                </div>
                <div class="profile-quote">
                    <i class="fas fa-lightbulb fa-lg quote-icon"></i>
                    <blockquote>AIの力で企業と個人の可能性を最大化するお手伝いをします！</blockquote>
                </div>
            `,
            keywords: ['AI', 'コンサルティング', 'キャリア戦略', 'マルチ収入', 'デジタル変革']
        },
        uta: {
            name: '兎歌（うた）',
            title: 'シンガーうさぎエージェント',
            image: 'uta_rabbit.png',
            brand: 'ALGSTROEMERIA',
            description: `
                <div class="profile-section">
                    <h4>プロフィール</h4>
                    <p>正体不明の歌い手として活動を始め、フードをかぶった姿と兎のモチーフだけが特徴の謎多きアーティスト。本人の素顔や素性については一切公開していません。</p>
                    <p>ネット上では「月の裏側から来た歌姫」と呼ばれています。実際の活動拠点は東京と言われていますが、生配信の背景から毎回異なる場所から発信しているとの憶測もあります。</p>
                </div>
                <div class="profile-quote">
                    <i class="fas fa-star fa-lg quote-icon"></i>
                    <blockquote>音楽は言葉を超える。私の声が届く限り、歌い続けます。</blockquote>
                </div>
            `,
            keywords: ['ミステリアス', '歌手', 'ライブ配信', 'インディーズ', '作詞作曲']
        },
        raito: {
            name: '礼兎（らいと）',
            title: 'SF小説うさぎエージェント',
            image: 'raito_rabbit.png',
            brand: 'SH↑S',
            description: `
                <div class="profile-section">
                    <h4>プロフィール</h4>
                    <p>デビュー前の経歴は謎に包まれていますが、コンピュータサイエンスと神経科学に精通しているとされています。作風は哲学的問いかけと先鋭的な科学理論を組み合わせた「思弁SF」が特徴。特にAIと人間の境界、意識の本質についての探求を得意としています。</p>
                    <p>唯一明らかにしている私生活の情報は、かつて「たぴおか」という名のロップイヤーを飼っていたことのみ。この体験が『エージェント・ラビット』創作の着想源になったとされています。</p>
                </div>
                <div class="profile-quote">
                    <i class="fas fa-quote-left fa-lg quote-icon"></i>
                    <blockquote>私たちが創るのは、物語ではなく、可能性の宇宙だ</blockquote>
                </div>
            `,
            keywords: ['SF', '思弁小説', 'AI哲学', '未来予測', '科学理論']
        }
    };

    // プロフィールモーダル機能
    const modalContainer = document.querySelector('.profile-modal-container');
    const modalContent = document.querySelector('.profile-content');
    const modalClose = document.querySelector('.modal-close');
    
    // エージェントカードのクリックイベント
    document.querySelectorAll('.agent-card').forEach(card => {
        card.addEventListener('click', function() {
            const agentId = this.dataset.agent;
            
            if (agentProfiles[agentId]) {
                displayProfile(agentProfiles[agentId]);
            }
        });
    });
    
    // プロフィール表示関数
    function displayProfile(profile) {
        // プロフィールコンテンツを生成
        let html = `
            <div class="profile-header">
                <div class="profile-image">
                    <img src="${profile.image}" alt="${profile.name}" class="profile-image-main">
                </div>
                <div class="profile-info">
                    <h3>${profile.name}</h3>
                    <p class="profile-title">${profile.title}</p>
                    <span class="profile-brand">${profile.brand}</span>
                </div>
            </div>
            <div class="profile-details">
                ${profile.description}
            </div>
        `;
        
        // キーワードタグを追加
        if (profile.keywords && profile.keywords.length > 0) {
            html += '<div class="profile-keywords">';
            html += '<h4>キーワード</h4>';
            html += '<div class="keyword-list">';
            profile.keywords.forEach(keyword => {
                html += `<span class="keyword-tag"><i class="fas fa-tag fa-sm"></i> ${keyword}</span>`;
            });
            html += '</div></div>';
        }
        
        // スタイルを追加
        const style = document.createElement('style');
        style.textContent = `
            .profile-header {
                display: flex;
                align-items: center;
                margin-bottom: 2rem;
                gap: 2rem;
            }
            
            @media (max-width: 768px) {
                .profile-header {
                    flex-direction: column;
                    text-align: center;
                }
            }
            
            .profile-image {
                flex-shrink: 0;
            }
            
            .profile-image-main {
                width: 120px;
                height: 120px;
                object-fit: cover;
                border-radius: 8px;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }
            
            .profile-info h3 {
                font-size: 2rem;
                margin: 0 0 0.5rem;
                color: #fff;
                font-weight: 700;
            }
            
            .profile-title {
                color: #ccc;
                font-size: 1.1rem;
                margin-bottom: 0.5rem;
            }
            
            .profile-brand {
                display: inline-block;
                background: linear-gradient(145deg, var(--accent-blue), var(--accent-purple));
                color: #fff;
                padding: 0.3rem 0.8rem;
                border-radius: 4px;
                font-size: 0.8rem;
                font-weight: 600;
            }
            
            .profile-section {
                margin-bottom: 2rem;
                background-color: rgba(255, 255, 255, 0.05);
                padding: 1.5rem;
                border-radius: 8px;
            }
            
            .profile-section h4 {
                font-size: 1.2rem;
                margin: 0 0 1rem;
                color: #fff;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                padding-bottom: 0.5rem;
            }
            
            .profile-section p {
                margin-bottom: 1rem;
                line-height: 1.6;
            }
            
            .profile-section p:last-child {
                margin-bottom: 0;
            }
            
            .profile-quote {
                position: relative;
                background: linear-gradient(145deg, rgba(0, 168, 255, 0.1), rgba(126, 68, 255, 0.1));
                padding: 1.5rem 2rem;
                border-radius: 8px;
                margin: 2rem 0;
                border-left: 4px solid var(--accent-blue);
            }
            
            .quote-icon {
                position: absolute;
                top: 1rem;
                left: 1rem;
                color: var(--accent-blue);
                opacity: 0.3;
                font-size: 1.5rem;
            }
            
            blockquote {
                margin: 0;
                font-style: italic;
                color: #fff;
                font-size: 1.1rem;
                line-height: 1.5;
                text-align: center;
            }
            
            .profile-keywords {
                margin-top: 2rem;
            }
            
            .profile-keywords h4 {
                font-size: 1.2rem;
                margin: 0 0 1rem;
                color: #fff;
            }
            
            .keyword-list {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            
            .keyword-tag {
                display: inline-block;
                background-color: rgba(255, 255, 255, 0.1);
                color: #ccc;
                padding: 0.4rem 0.8rem;
                border-radius: 4px;
                font-size: 0.85rem;
                transition: all 0.3s ease;
            }
            
            .keyword-tag:hover {
                background-color: var(--accent-blue);
                color: #fff;
                transform: translateY(-2px);
            }
        `;
        
        // プロフィールコンテンツとスタイルを設定
        modalContent.innerHTML = html;
        document.head.appendChild(style);
        
        // モーダルを表示
        modalContainer.classList.add('active');
        
        // スクロールを無効化
        document.body.style.overflow = 'hidden';
    }
    
    // モーダルを閉じる
    modalClose.addEventListener('click', function() {
        modalContainer.classList.remove('active');
        
        // スクロールを有効に戻す
        document.body.style.overflow = '';
        
        // 一時的なスタイルタグを削除
        const tempStyle = document.querySelector('style:last-child');
        if (tempStyle) {
            tempStyle.remove();
        }
        
        // アニメーション終了後にコンテンツをクリア
        setTimeout(() => {
            modalContent.innerHTML = '';
        }, 300);
    });
    
    // モーダル外のクリックで閉じる
    modalContainer.addEventListener('click', function(e) {
        if (e.target === this) {
            modalClose.click();
        }
    });

    // エスケープキーでも閉じられるように
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
            modalClose.click();
        }
    });

    // ヘッダーのスクロール変化
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '0.8rem 0';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.padding = '1.2rem 0';
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.2)';
        }
    });
    
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // ナビゲーションのアクティブスタイルを更新
            document.querySelectorAll('nav a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});