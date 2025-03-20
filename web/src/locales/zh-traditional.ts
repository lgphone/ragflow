export default {
  translation: {
    common: {
      delete: '刪除',
      deleteModalTitle: '確定刪除嗎?',
      ok: '是',
      cancel: '否',
      total: '總共',
      rename: '重命名',
      name: '名稱',
      save: '保持',
      namePlaceholder: '請輸入名稱',
      next: '下一步',
      create: '創建',
      edit: '編輯',
      upload: '上傳',
      english: '英語',
      portugueseBr: '葡萄牙語 (巴西)',
      chinese: '簡體中文',
      traditionalChinese: '繁體中文',
      language: '語言',
      languageMessage: '請輸入語言',
      languagePlaceholder: '請選擇語言',
      copy: '複製',
      copied: '複製成功',
      comingSoon: '即將推出',
      download: '下載',
      close: '關閉',
      preview: '預覽',
      move: '移動',
      warn: '提醒',
      action: '操作',
      s: '秒',
      pleaseSelect: '請選擇',
      pleaseInput: '請輸入',
      submit: '提交',
      embedIntoSite: '嵌入網站',
      previousPage: '上一頁',
      nextPage: '下一頁',
    },
    login: {
      login: '登入',
      signUp: '註冊',
      loginDescription: '很高興再次見到您！',
      registerDescription: '很高興您加入！',
      emailLabel: '郵箱',
      emailPlaceholder: '請輸入郵箱地址',
      passwordLabel: '密碼',
      passwordPlaceholder: '請輸入密碼',
      rememberMe: '記住我',
      signInTip: '沒有帳戶？',
      signUpTip: '已經有帳戶？',
      nicknameLabel: '名稱',
      nicknamePlaceholder: '請輸入名稱',
      register: '創建賬戶',
      continue: '繼續',
      title: '開始構建您的智能助手',
      description:
        '免費註冊以探索頂級 RAG 技術。創建知識庫和人工智能來增強您的業務',
      review: '來自 500 多條評論',
    },
    header: {
      knowledgeBase: '知識庫',
      chat: '聊天',
      register: '註冊',
      signin: '登入',
      home: '首頁',
      setting: '用戶設置',
      logout: '登出',
      fileManager: '文件管理',
      flow: 'Agent',
      search: '搜尋',
    },
    knowledgeList: {
      welcome: '歡迎回來',
      description: '今天我們要使用哪個知識庫？',
      createKnowledgeBase: '創建知識庫',
      name: '名稱',
      namePlaceholder: '請輸入名稱',
      doc: '文件',
      searchKnowledgePlaceholder: '搜索',
      noMoreData: `That's all. Nothing more.`,
    },
    knowledgeDetails: {
      dataset: '數據集',
      testing: '檢索測試',
      configuration: '配置',
      knowledgeGraph: '知識圖譜',
      files: '文件',
      name: '名稱',
      namePlaceholder: '請輸入名稱',
      doc: '文件',
      datasetDescription: '😉 解析成功後才能問答哦。',
      addFile: '新增文件',
      searchFiles: '搜索文件',
      localFiles: '本地文件',
      emptyFiles: '新建空文件',
      webCrawl: '網頁抓取',
      chunkNumber: '分塊數',
      uploadDate: '上傳日期',
      chunkMethod: '切片方法',
      enabled: '啟用',
      disabled: '禁用',
      action: '動作',
      parsingStatus: '解析狀態',
      processBeginAt: '流程開始於',
      processDuration: '過程持續時間',
      progressMsg: '進度消息',
      testingDescription:
        '完成召回測試：確保你的設定可以從資料庫正確地召回文字區塊。請注意這裡的改動不會被自動保存。如果你調整了這裡的默認設置，比如關鍵詞相似度權重，請務必在聊天助手設置或者召回算子設置處同步更新相關設置。',
      similarityThreshold: '相似度閾值',
      similarityThresholdTip:
        '我們使用混合相似度得分來評估兩行文本之間的距離。它是加權關鍵詞相似度和向量餘弦相似度。如果查詢和塊之間的相似度小於此閾值，則該塊將被過濾掉。',
      vectorSimilarityWeight: '關鍵字相似度權重',
      vectorSimilarityWeightTip:
        '我們使用混合相似性評分來評估兩行文本之間的距離。它是加權關鍵字相似性和矢量餘弦相似性或rerank得分（0〜1）。兩個權重的總和為1.0。',
      testText: '測試文本',
      testTextPlaceholder: '請輸入您的問題！',
      testingLabel: '測試',
      similarity: '混合相似度',
      termSimilarity: '關鍵詞相似度',
      vectorSimilarity: '向量相似度',
      hits: '命中次數',
      view: '看法',
      filesSelected: '選定的文件',
      upload: '上傳',
      run: '解析',
      runningStatus0: '未解析',
      runningStatus1: '解析中',
      runningStatus2: '取消',
      runningStatus3: '成功',
      runningStatus4: '失敗',
      pageRanges: '頁碼範圍',
      pageRangesTip:
        '頁碼範圍：定義需要解析的頁面範圍。不包含在這些範圍內的頁面將被忽略。',
      fromPlaceholder: '從',
      fromMessage: '缺少起始頁碼',
      toPlaceholder: '到',
      toMessage: '缺少結束頁碼（不包含）',
      layoutRecognize: 'PDF解析器',
      layoutRecognizeTip:
        '使用視覺模型進行 PDF 布局分析，以更好地識別文檔結構，找到標題、文字塊、圖像和表格的位置。若選擇 Naive 選項，則只能取得 PDF 的純文字。請注意此功能僅適用於 PDF 文檔，對其他文檔不生效。',
      taskPageSize: '任務頁面大小',
      taskPageSizeMessage: '請輸入您的任務頁面大小！',
      taskPageSizeTip: `如果使用佈局識別，PDF 文件將被分成連續的組。佈局分析將在組之間並行執行，以提高處理速度。“任務頁面大小”決定組的大小。頁面大小越大，將頁面之間的連續文本分割成不同塊的機會就越低。`,
      addPage: '新增頁面',
      greaterThan: '當前值必須大於起始值！',
      greaterThanPrevious: '當前值必須大於之前的值！',
      selectFiles: '選擇文件',
      changeSpecificCategory: '更改特定類別',
      uploadTitle: '點擊或拖拽文件至此區域即可上傳',
      uploadDescription:
        '支持單次或批量上傳。本地部署的單次上傳檔案總大小上限為 1GB，單次批量上傳檔案數不超過 32，單個帳戶不限檔案數量。對於 demo.ragflow.io，每次上傳的文件總大小限制為 10MB，每個文件不得超過 10MB，且每個帳戶最多可上傳 128 個文件。',
      chunk: '解析塊',
      bulk: '批量',
      cancel: '取消',
      rerankModel: 'rerank模型',
      rerankPlaceholder: '請選擇',
      rerankTip: `如果是空的。它使用查詢和塊的嵌入來構成矢量餘弦相似性。否則，它使用rerank評分代替矢量餘弦相似性。`,
      topK: 'Top-K',
      topKTip: `K塊將被送入Rerank型號。`,
      delimiter: `文字分段標識符`,
      delimiterTip:
        '支援多字元作為分隔符，多字元分隔符用`包裹。如配置成這樣：\n`##`;那麼就會用換行，兩個#以及分號先對文字進行分割，然後按照「 token number」大小進行拼裝。',
      html4excel: '表格轉HTML',
      html4excelTip: `啟用後，電子表格將解析為 HTML 表格，一張表格最多 256 行。否則，會按行解析成鍵值對。`,
      autoKeywords: '自動關鍵字',
      autoKeywordsTip: `自動為每個文字區塊中提取 N 個關鍵詞，以提升查詢精度。請注意：此功能採用「系統模型設定」中設定的預設聊天模型提取關鍵詞，因此也會產生更多 Token 消耗。此外，你也可以手動更新生成的關鍵詞。`,
      autoQuestions: '自動問題',
      autoQuestionsTip: `在查詢此類問題時，為每個區塊提取 N 個問題以提高其排名分數。在「系統模型設定」中設定的 LLM 將消耗額外的 token。您可以在區塊清單中查看結果。如果發生錯誤，此功能不會破壞整個分塊過程，除了將空結果新增至原始區塊。 `,
      redo: '是否清空已有 {{chunkNum}}個 chunk？',
      setMetaData: '設定元數據',
      pleaseInputJson: '請輸入JSON',
      documentMetaTips: `<p>元資料為 Json 格式（不可搜尋）。如果提示中包含該文件的任何部分，它將被添加到 LLM 提示中。
<p>範例：</p>
<b>元資料是：</b><br>
<code>
  {
      "Author": "Alex Dowson",
      "Date": "2024-11-12"
  }
</code><br>
<b>提示將是：</b><br>
<p>文檔：文檔名稱</p>
<p>作者：Alex Dowson</p>
<p>日期：2024-11-12</p>
<p>相關片段如下：</p>
<ul>
<li>這是區塊內容....</li>
<li>這是區塊內容....</li>
</ul>
`,
      metaData: '元資料',
      deleteDocumentConfirmContent:
        '該文件與知識圖譜相關聯。刪除後，相關節點和關係資訊將被刪除，但圖不會立即更新。更新圖動作是在解析承載知識圖譜提取任務的新文件的過程中執行的。 ',
      plainText: 'Naive',
      reRankModelWaring: '重排序模型非常耗時。',
    },
    knowledgeConfiguration: {
      titleDescription: '在這裡更新您的知識庫詳細信息，尤其是切片方法。',
      name: '知識庫名稱',
      photo: '知識庫圖片',
      description: '描述',
      language: '文件語言',
      languageMessage: '請輸入語言',
      languagePlaceholder: '請輸入語言',
      permissions: '權限',
      embeddingModel: '嵌入模型',
      chunkTokenNumber: '文字的區塊標記編號',
      chunkTokenNumberMessage: '塊Token數是必填項',
      embeddingModelTip:
        '用於嵌入塊的嵌入模型。一旦知識庫有了塊，它就無法更改。如果你想改變它，你需要刪除所有的塊。',
      permissionsTip: '如果權限是“團隊”，則所有團隊成員都可以操作知識庫。',
      chunkTokenNumberTip: '它大致確定了一個塊的Token數量。',
      chunkMethod: '切片方法',
      chunkMethodTip: '說明位於右側。',
      upload: '上傳',
      english: '英語',
      chinese: '中文',
      embeddingModelPlaceholder: '請選擇嵌入模型',
      chunkMethodPlaceholder: '請選擇分塊方法',
      save: '保持',
      me: '只有我',
      team: '團隊',
      cancel: '取消',
      methodTitle: '分塊方法說明',
      methodExamples: '示例',
      methodExamplesDescription: '提出以下屏幕截圖以促進理解。',
      dialogueExamplesTitle: '對話示例',
      methodEmpty: '這將顯示知識庫類別的可視化解釋',
      book: `<p>支持的文件格式為<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。</p><p>
        由於一本書很長，並不是所有部分都有用，如果是 PDF，
        請為每本書設置<i>頁面範圍</i>，以消除負面影響並節省分析計算時間。</p>`,
      laws: `<p>支持的文件格式為<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。</p><p>
        法律文件有非常嚴格的書寫格式。我們使用文本特徵來檢測分割點。
        </p><p>
        chunk的粒度與'文章'一致，所有上層文本都會包含在chunk中。
        </p>`,
      manual: `<p>僅支持<b>PDF</b>。</p><p>
        我們假設手冊具有分層部分結構。我們使用最低的部分標題作為對文檔進行切片的樞軸。
        因此，同一部分中的圖和表不會被分割，並且塊大小可能會很大。
        </p>`,
      naive: `<p>支持的文件格式為<b>DOCX、XLSX、XLS (Excel97~2003)、PPT、PDF、TXT、JPEG、JPG、PNG、TIF、GIF、CSV、JSON、EML、HTML</b>。</p>
        <p>此方法將簡單的方法應用於塊文件：</p>
        <p>
        <li>系統將使用視覺檢測模型將連續文本分割成多個片段。</li>
        <li>接下來，這些連續的片段被合併成Token數不超過“Token數”的塊。</li></p>`,
      paper: `<p>僅支持<b>PDF</b>文件。</p><p>
        如果我們的模型運行良好，論文將按其部分進行切片，例如<i>摘要、1.1、1.2</i>等。</p><p>
        這樣做的好處是LLM可以更好的概括論文中相關章節的內容，
        產生更全面的答案，幫助讀者更好地理解論文。
        缺點是它增加了 LLM 對話的背景並增加了計算成本，
        所以在對話過程中，你可以考慮減少‘<b>topN</b>’的設置。</p>`,
      presentation: `<p>支持的文件格式為<b>PDF</b>、<b>PPTX</b>。</p><p>
        每個頁面都將被視為一個塊。並且每個頁面的縮略圖都會被存儲。</p><p>
        <i>您上傳的所有PPT文件都會使用此方法自動分塊，無需為每個PPT文件進行設置。</i></p>`,
      qa: `<p>
      此塊方法支持<b> excel </b>和<b> csv/txt </b>文件格式。
    </p>
    <li>
      如果文件是<b> excel </b>格式，則應由兩個列組成
      沒有標題：一個提出問題，另一個用於答案，
      答案列之前的問題列。多張紙是
      只要列正確結構，就可以接受。
    </li>
    <li>
      如果文件是<b> csv/txt </b>格式
      以 UTF-8 編碼且用 TAB 作分開問題和答案的定界符。
    </li>
    <p>
      <i>
        未能遵循上述規則的文本行將被忽略，並且
        每個問答對將被認為是一個獨特的部分。
      </i>`,
      resume: `<p>支持的文件格式為<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。
        </p><p>
        簡歷有多種格式，就像一個人的個性一樣，但我們經常必須將它們組織成結構化數據，以便於搜索。
        </p><p>
        我們不是將簡歷分塊，而是將簡歷解析為結構化數據。作為HR，你可以扔掉所有的簡歷，
        您只需與<i>'ragflow'</i>交談即可列出所有符合資格的候選人。
        </p>
          `,
      table: `支持<p><b>XLSX</b>和<b>csv/txt</b>格式文件。</p><p>以下是一些提示： <ul> <li>对于Csv或Txt文件，列之间的分隔符为 <em><b>tab</b></em>。</li> <li>第一行必须是列标题。</li> <li>列标题必须是有意义的术语，以便我们的大語言模型能够理解。列举一些同义词时最好使用斜杠<i>'/'</i>来分隔，甚至更好使用方括号枚举值，例如 <i>“性別/性別（男性，女性）”</i>.<p>以下是标题的一些示例：<ol> <li>供应商/供货商<b>'tab'</b>顏色（黃色、紅色、棕色）<b>'tab'</b>性別（男、女）<b>'tab'</B>尺码（m、l、xl、xxl）</li> <li>姓名/名字<b>'tab'</b>電話/手機/微信<b>'tab'</b>最高学历（高中，职高，硕士，本科，博士，初中，中技，中专，专科，专升本，mpa，mba，emba）</li> </ol> </p> </li> <li>表中的每一行都将被视为一个块。</li> </ul>`,
      picture: `
       <p>支持圖像文件。視頻即將推出。</p><p>
        如果圖片中有文字，則應用 OCR 提取文字作為其文字描述。
        </p><p>
        如果OCR提取的文本不夠，可以使用視覺LLM來獲取描述。
        </p>`,
      one: `
      <p>支持的文件格式為<b>DOCX、EXCEL、PDF、TXT</b>。
        </p><p>
        對於一個文檔，它將被視為一個完整的塊，根本不會被分割。
        </p><p>
        如果你要總結的東西需要一篇文章的全部上下文，並且所選LLM的上下文長度覆蓋了文檔長度，你可以嘗試這種方法。
        </p>`,
      knowledgeGraph: `<p>支援的檔案格式為<b>DOCX、EXCEL、PPT、IMAGE、PDF、TXT、MD、JSON、EML</b>

<p>文件分塊後，使用分塊擷取整個文件的知識圖譜和心智圖。此方法將簡單的方法應用於區塊檔案：
連續的文字將被分割成多個片段，每個片段大約有 512 個令牌數。
<p>接下來，區塊將傳送到LLM以提取知識圖譜和思維導圖的節點和關係。

<p>請注意您需要指定的條目類型。</p></p>`,
      tag: `<p>使用「標籤」作為分塊方法的知識庫應該被其他知識庫用來將標籤加入其區塊中，查詢也將帶有標籤。
<p>使用「標籤」作為分塊方法的知識庫<b>不</b>應該參與 RAG 過程。
<p>本知識庫中的區塊是標籤的範例，展示了整個標籤集以及區塊與標籤之間的相關性。

<p>此區塊方法支援<b>XLSX</b>和<b>CSV/TXT</b>檔案格式。
<p>如果檔案採用 <b>XLSX</b> 格式，則應包含兩列，不含標題：一列用於內容，另一列用於標籤，內容列位於標籤列之前。只要列的結構正確，多張紙也是可以接受的。
<p>如果檔案為<b>CSV/TXT</b>格式，則必須採用UTF-8編碼，並以TAB作為分隔符號來分隔內容和標籤。
<p>標籤欄中，標籤之間有英文<b>逗號</b>。
<i>不符合上述規則的文字行將被忽略，並且每一對將被視為一個不同的區塊。
`,
      useRaptor: '使用RAPTOR文件增強策略',
      useRaptorTip: '請參考 https://huggingface.co/papers/2401.18059',
      prompt: '提示詞',
      promptMessage: '提示詞是必填項',
      promptText: `请請總結以下段落。 小心數字，不要編造。 段落如下：
      {cluster_content}
以上就是你需要總結的內容。`,
      maxToken: '最大token數',
      maxTokenMessage: '最大token數是必填項',
      threshold: '閾值',
      thresholdMessage: '閾值是必填項',
      maxCluster: '最大聚類數',
      maxClusterMessage: '最大聚類數是必填項',
      randomSeed: '隨機種子',
      randomSeedMessage: '隨機種子是必填項',
      promptTip: 'LLM提示用於總結。',
      maxTokenTip: '用於匯總的最大token數。',
      thresholdTip: '閾值越大，聚類越少。',
      maxClusterTip: '最大聚類數。',
      entityTypes: '實體類型',
      pageRank: '頁面排名',
      pageRankTip: `這用來提高相關性分數。所有檢索到的區塊的相關性得分將加上該數字。
當您想要先搜尋給定的知識庫時，請設定比其他人更高的 pagerank 分數。`,
      tagName: '標籤',
      frequency: '頻次',
      searchTags: '搜尋標籤',
      tagCloud: '雲端',
      tagTable: '表',
      tagSet: '標籤庫',
      topnTags: 'Top-N 標籤',
      tagSetTip: `
      <p>請選擇一個或多個標籤集或標籤知識庫，用於對知識庫中的每個文本塊進行標記。</p>
      <p>對這些文本塊的查詢也將自動關聯相應標籤。</p>
      <p>此功能基於文本相似度，能夠為數據集的文本塊批量添加更多領域知識，從而顯著提高檢索準確性。該功能還能提升大量文本塊的操作效率。</p>
      <p>為了更好地理解標籤集的作用，以下是標籤集和關鍵詞之間的主要區別：</p>
      <ul>
        <li>標籤集是一個由用戶定義和管理的封閉集，而自動生成的關鍵詞屬於開放集合。</li>
        <li>在給你的知識庫文本塊批量打標籤之前，你需要先生成標籤集作為樣本。</li>
        <li>自動關鍵詞功能中的關鍵詞由 LLM 生成，此過程相對耗時，並且會產生一定的 Token 消耗。</li>
      </ul>
 `,
      tags: '標籤',
      addTag: '增加標籤',
      useGraphRag: '提取知識圖譜',
      useGraphRagTip:
        '文件分塊後，所有區塊將用於知識圖譜生成，這對多跳和複雜問題的推理有很大幫助。',
      graphRagMethod: '方法',
      graphRagMethodTip: `Light：實體和關係提取提示來自 GitHub - HKUDS/LightRAG：“LightRAG：簡單快速的檢索增強生成”<br>
 一般：實體和關係擷取提示來自 GitHub - microsoft/graphrag：基於模組化圖形的檢索增強生成 (RAG) 系統，`,
      resolution: '實體歸一化',
      resolutionTip: `解析過程會將具有相同意義的實體合併在一起，使知識圖譜更簡潔、更準確。應合併以下實體：川普總統、唐納德·川普、唐納德·J·川普、唐納德·約翰·川普`,
      community: '社群報告生成',
      communityTip:
        '區塊被聚集成層次化的社區，其中實體和關係透過更高層次的抽象將每個部分連接起來。然後，我們使用 LLM 產生每個社群的摘要，即社群報告。更多資訊：https://www.microsoft.com/en-us/research/blog/graphrag-improving-global-search-via-dynamic-community-selection/',
    },
    chunk: {
      chunk: '解析塊',
      bulk: '批量',
      selectAll: '選擇所有',
      enabledSelected: '啟用選定的',
      disabledSelected: '禁用選定的',
      deleteSelected: '刪除選定的',
      search: '搜尋',
      all: '所有',
      enabled: '啟用',
      disabled: '禁用',
      keyword: '關鍵詞',
      function: '函數',
      chunkMessage: '請輸入值！',
      full: '全文',
      ellipse: '省略',
      graph: '知識圖譜',
      mind: '心智圖',
      question: '問題',
      questionTip: `如果存在給定的問題，則區塊的嵌入將基於它們。`,
    },
    chat: {
      newConversation: '新會話',
      createAssistant: '新建助理',
      assistantSetting: '助理設置',
      promptEngine: '提示引擎',
      modelSetting: '模型設置',
      chat: '聊天',
      newChat: '新建聊天',
      send: '發送',
      sendPlaceholder: '消息概要助手...',
      chatConfiguration: '聊天配置',
      chatConfigurationDescription: '在這裡，為你的專業知識庫裝扮專屬助手！💕',
      assistantName: '助理姓名',
      assistantNameMessage: '助理姓名是必填項',
      namePlaceholder: '例如 賈維斯簡歷',
      assistantAvatar: '助理頭像',
      language: '語言',
      emptyResponse: '空回复',
      emptyResponseTip: `如果在知識庫中沒有檢索到用戶的問題，它將使用它作為答案。如果您希望 LLM 在未檢索到任何內容時提出自己的意見，請將此留空。`,
      emptyResponseMessage: `當知識庫中沒有檢索到任何相關內容時，將觸發空響應。由於未選擇任何知識庫，因此刪除“空響應”。`,
      setAnOpener: '設置開場白',
      setAnOpenerInitial: `你好！我是你的助理，有什麼可以幫到你的嗎？`,
      setAnOpenerTip: '您想如何歡迎您的客戶？',
      knowledgeBases: '知識庫',
      knowledgeBasesMessage: '請選擇',
      knowledgeBasesTip: '選擇關聯的知識庫。',
      system: '系統提示词',
      systemInitialValue: `你是一個智能助手，請總結知識庫的內容來回答問題，請列舉知識庫中的數據詳細回答。當所有知識庫內容都與問題無關時，你的回答必須包括“知識庫中未找到您要的答案！”這句話。回答需要考慮聊天歷史。
      以下是知識庫：
      {knowledge}
      以上是知識庫。`,
      systemMessage: '請輸入',
      systemTip:
        '當LLM回答問題時，你需要LLM遵循的說明，比如角色設計、答案長度和答案語言等。',
      topN: 'Top N',
      topNTip: `並非所有相似度得分高於“相似度閾值”的塊都會被提供給法學碩士。LLM 只能看到這些“Top N”塊。`,
      variable: '變量',
      variableTip: `如果您使用对话 API，变量可能会帮助您使用不同的策略与客户聊天。
        这些变量用于填写提示中的“系统提示词”部分，以便给LLM一个提示。
        “知识”是一个非常特殊的变量，它将用检索到的块填充。
        “系统提示词”中的所有变量都应该用大括号括起来。`,
      add: '新增',
      key: '關鍵字',
      optional: '可選的',
      operation: '操作',
      model: '模型',
      modelTip: '大語言聊天模型',
      modelMessage: '請選擇',
      freedom: '自由度',
      improvise: '即興創作',
      precise: '精確',
      balance: '平衡',
      freedomTip: `“精確”意味著法學碩士會保守並謹慎地回答你的問題。“即興發揮”意味著你希望法學碩士能夠自由地暢所欲言。“平衡”是謹慎與自由之間的平衡。`,
      temperature: '溫度',
      temperatureMessage: '溫度是必填項',
      temperatureTip:
        '該參數控制模型預測的隨機性。較低的溫度使模型對其響應更有信心，而較高的溫度則使其更具創造性和多樣性。',
      topP: '頂級P',
      topPMessage: 'Top P 是必填項',
      topPTip:
        '該參數也稱為“核心採樣”，它設置一個閾值來選擇較小的單詞集進行採樣。它專注於最可能的單詞，剔除不太可能的單詞。',
      presencePenalty: '存在處罰',
      presencePenaltyMessage: '存在處罰是必填項',
      presencePenaltyTip:
        '這會通過懲罰對話中已經出現的單詞來阻止模型重複相同的信息。',
      frequencyPenalty: '頻率懲罰',
      frequencyPenaltyMessage: '頻率懲罰是必填項',
      frequencyPenaltyTip:
        '與存在懲罰類似，這減少了模型頻繁重複相同單詞的傾向。',
      maxTokens: '最大token數',
      maxTokensMessage: '最大token數是必填項',
      maxTokensTip:
        '這設置了模型輸出的最大長度，以標記（單詞或單詞片段）的數量來衡量。',
      maxTokensInvalidMessage: '請輸入有效的最大標記數。',
      maxTokensMinMessage: '最大標記數不能小於 0。',
      quote: '顯示引文',
      quoteTip: '是否應該顯示原文出處？',
      selfRag: 'Self-RAG',
      selfRagTip: '請參考: https://huggingface.co/papers/2310.11511',
      overview: '聊天 ID',
      pv: '消息數',
      uv: '活躍用戶數',
      speed: 'Token 輸出速度',
      tokens: '消耗Token數',
      round: '會話互動數',
      thumbUp: '用戶滿意度',
      preview: '預覽',
      embedded: '嵌入',
      serviceApiEndpoint: '服務 API 端點',
      apiKey: 'API KEY',
      apiReference: 'API 文檔',
      dateRange: '日期範圍：',
      backendServiceApi: 'API 伺服器',
      createNewKey: '創建新密鑰',
      created: '創建於',
      action: '操作',
      embedModalTitle: '嵌入網站',
      comingSoon: '即將推出',
      fullScreenTitle: '全屏嵌入',
      fullScreenDescription: '將以下iframe嵌入您的網站處於所需位置',
      partialTitle: '部分嵌入',
      extensionTitle: 'Chrome 插件',
      tokenError: '請先創建 API Token!',
      betaError: '請先在系統設定中申請API密鑰。',
      searching: '搜索中',
      parsing: '解析中',
      uploading: '上傳中',
      uploadFailed: '上傳失敗',
      regenerate: '重新生成',
      read: '朗讀內容',
      tts: '文字轉語音',
      ttsTip: '是否用語音轉換播放語音，請先在設定裡面選擇TTS（語音轉換模型）。',
      relatedQuestion: '相關問題',
      answerTitle: '智慧回答',
      multiTurn: '多輪對話優化',
      multiTurnTip:
        '在多輪對話的中，對去知識庫查詢的問題進行最佳化。會呼叫大模型額外消耗token。',
      howUseId: '如何使用聊天ID？',
      description: '助理描述',
      descriptionPlaceholder:
        '例如 你是一個專業的簡曆助手，隻能回答簡曆的問題。',
      useKnowledgeGraph: '使用知識圖譜',
      useKnowledgeGraph提示:
        '它將檢索相關實體、關係和社區報告的描述，這將增強多跳和複雜問題的推理。',
      keyword: '關鍵字分析',
      keywordTip: `應用LLM分析使用者的問題，提取在相關性計算中需要強調的關鍵字。`,
      reasoning: '推理',
      reasoningTip:
        '是否像 DeepSeek-R1 / OpenAI o1 一樣通過推理產生答案。啟用後，允許模型在遇到未知情況時將代理搜索過程整合到推理工作流中，自行動態檢索外部知識，並通過推理生成最終答案。',
      tavilyApiKeyTip:
        '如果 API 金鑰設定正確，它將利用 Tavily 進行網路搜尋作為知識庫的補充。',
      tavilyApiKeyMessage: '請輸入你的 Tavily API Key',
      tavilyApiKeyHelp: '如何獲取？',
    },
    setting: {
      profile: '概述',
      profileDescription: '在此更新您的照片和個人詳細信息。',
      maxTokens: '最大token數',
      maxTokensMessage: '最大token數是必填項',
      maxTokensTip:
        '這設置了模型輸出的最大長度，以標記（單詞或單詞片段）的數量來衡量。',
      maxTokensInvalidMessage: '請輸入有效的最大標記數。',
      maxTokensMinMessage: '最大標記數不能小於 0。',
      password: '密碼',
      passwordDescription: '請輸入您當前的密碼以更改您的密碼。',
      model: '模型提供商',
      modelDescription: '在此設置模型參數和 API KEY。',
      team: '團隊',
      logout: '登出',
      system: '系統',
      username: '使用者名稱',
      usernameMessage: '請輸入用戶名',
      photo: '頭像',
      photoDescription: '這將顯示在您的個人資料上。',
      colorSchema: '主題',
      colorSchemaMessage: '請選擇您的主題！',
      colorSchemaPlaceholder: '請選擇您的主題！',
      bright: '明亮',
      dark: '暗色',
      timezone: '時區',
      timezoneMessage: '請選擇時區',
      timezonePlaceholder: '請選擇時區',
      email: '郵箱地址',
      emailDescription: '一旦註冊，電子郵件將無法更改。',
      currentPassword: '當前密碼',
      currentPasswordMessage: '請輸入當前密碼',
      newPassword: '新密碼',
      newPasswordMessage: '請輸入新密碼',
      newPasswordDescription: '您的新密碼必須超過 8 個字符。',
      confirmPassword: '確認新密碼',
      confirmPasswordMessage: '請確認新密碼',
      confirmPasswordNonMatchMessage: '您輸入的新密碼不匹配！',
      cancel: '取消',
      addedModels: '添加了的模型',
      modelsToBeAdded: '待添加的模型',
      addTheModel: '添加模型',
      apiKey: 'api-key',
      apiKeyMessage: '請輸入api key（如果是本地部署的模型，請忽略它）',
      apiKeyTip: 'API key可以通過註冊相應的LLM供應商來獲取。',
      showMoreModels: '展示更多模型',
      baseUrl: 'base-url',
      baseUrlTip:
        '如果您的 API 密鑰來自 OpenAI，請忽略它。任何其他中間提供商都會提供帶有 API 密鑰的基本 URL。',
      modify: '修改',
      systemModelSettings: '系統模型設置',
      chatModel: '聊天模型',
      chatModelTip: '所有新創建的知識庫都會使用默認的聊天LLM。',
      ttsModel: '語音合成模型',
      ttsModelTip: '默認的tts模型會被用於在對話過程中請求語音生成時使用。',
      embeddingModel: '嵌入模型',
      embeddingModelTip: '所有新創建的知識庫都將使用的默認嵌入模型。',
      img2txtModel: 'img2Txt模型',
      img2txtModelTip:
        '所有新創建的知識庫都將使用默認的多模塊模型。它可以描述圖片或視頻。',
      sequence2txtModel: 'speech2Txt模型',
      sequence2txtModelTip:
        '所有新創建的知識庫都將使用默認的 ASR 模型。使用此模型將語音翻譯為相應的文本。',
      rerankModel: 'rerank模型',
      rerankModelTip: `默認的重讀模型用於用戶問題檢索到重讀塊。`,
      workspace: '工作空間',
      upgrade: '升級',
      addLlmTitle: '添加Llm',
      modelName: '模型名稱',
      modelID: '模型ID',
      modelUid: '模型uid',
      modelType: '模型類型',
      addLlmBaseUrl: '基礎 Url',
      vision: '是否支持Vision',
      modelNameMessage: '請輸入模型名稱！',
      modelTypeMessage: '請輸入模型類型！',
      baseUrlNameMessage: '請輸入基礎 Url！',
      ollamaLink: '如何集成 {{name}}',
      FishAudioLink: '如何使用Fish Audio',
      TencentCloudLink: '如何使用騰訊雲語音識別',
      volcModelNameMessage: '請輸入模型名稱！',
      addEndpointID: '模型 EndpointID',
      endpointIDMessage: '請輸入模型對應的EndpointID',
      addArkApiKey: '火山 ARK_API_KEY',
      ArkApiKeyMessage: '請輸入火山創建的ARK_API_KEY',
      bedrockModelNameMessage: '請輸入名稱！',
      addBedrockEngineAK: 'ACCESS KEY',
      bedrockAKMessage: '請輸入 ACCESS KEY',
      addBedrockSK: 'SECRET KEY',
      bedrockSKMessage: '請輸入 SECRET KEY',
      bedrockRegion: 'AWS Region',
      bedrockRegionMessage: '請選擇！',
      'us-east-1': '美國東部 (維吉尼亞北部)',
      'us-west-2': '美國西部 (俄勒岡州)',
      'ap-southeast-1': '亞太地區 (新加坡)',
      'ap-northeast-1': '亞太地區 (東京)',
      'eu-central-1': '歐洲 (法蘭克福)',
      'us-gov-west-1': 'AWS GovCloud (US-West)',
      'ap-southeast-2': '亞太地區 (雪梨)',
      addHunyuanSID: '混元 Secret ID',
      HunyuanSIDMessage: '請輸入 Secret ID',
      addHunyuanSK: '混元 Secret Key',
      HunyuanSKMessage: '請輸入 Secret Key',
      addTencentCloudSID: '騰訊雲 Secret ID',
      TencentCloudSIDMessage: '請輸入 Secret ID',
      addTencentCloudSK: '騰訊雲 Secret Key',
      TencentCloudSKMessage: '請輸入 Secret Key',
      SparkModelNameMessage: '請選擇星火模型!',
      addSparkAPIPassword: '星火 APIPassword',
      SparkAPIPasswordMessage: '請輸入 APIPassword',
      addSparkAPPID: '星火 APPID',
      SparkAPPIDMessage: '請輸入 APPID',
      addSparkAPISecret: '星火 APISecret',
      SparkAPISecretMessage: '請輸入 APISecret',
      addSparkAPIKey: '星火 APIKey',
      SparkAPIKeyMessage: '請輸入 APIKey',
      yiyanModelNameMessage: '輸入模型名稱',
      addyiyanAK: '一言 API KEY',
      yiyanAKMessage: '請輸入 API KEY',
      addyiyanSK: '一言 Secret KEY',
      yiyanSKMessage: '請輸入 Secret KEY',
      FishAudioModelNameMessage: '請為你的TTS模型起名',
      addFishAudioAK: 'Fish Audio API KEY',
      addFishAudioAKMessage: '請輸入 API KEY',
      addFishAudioRefID: 'FishAudio Refrence ID',
      addFishAudioRefIDMessage: '請輸入引用模型的ID（留空表示使用默認模型）',
      GoogleModelIDMessage: '請輸入 model ID!',
      addGoogleProjectID: 'Project ID',
      GoogleProjectIDMessage: '請輸入 Project ID',
      addGoogleServiceAccountKey:
        'Service Account Key(Leave blank if you use Application Default Credentials)',
      GoogleServiceAccountKeyMessage:
        '請輸入 Google Cloud Service Account Key in base64 format',
      addGoogleRegion: 'Google Cloud 區域',
      GoogleRegionMessage: '請輸入 Google Cloud 區域',
      modelProvidersWarn: `請先在<b>設定>模型提供者</b>中新增嵌入模型和LLM。然後，在「系統模型設定」中設定它們。`,
      add: '添加',
      updateDate: '更新日期',
      role: '角色',
      invite: '邀請',
      agree: '同意',
      refuse: '拒絕',
      teamMembers: '團隊成員',
      joinedTeams: '加入的團隊',
      sureDelete: '您確定刪除該成員嗎？',
      quit: '退出',
      sureQuit: '確定退出加入的團隊嗎？',
    },
    message: {
      registered: '註冊成功',
      logout: '登出成功',
      logged: '登錄成功',
      pleaseSelectChunk: '請選擇解析塊',
      modified: '更新成功',
      created: '創建成功',
      deleted: '刪除成功',
      renamed: '重命名成功',
      operated: '操作成功',
      updated: '更新成功',
      uploaded: '上傳成功',
      200: '服務器成功返回請求的數據。',
      201: '新建或修改數據成功。',
      202: '一個請求已經進入後台排隊（異步任務）。',
      204: '刪除數據成功。',
      400: '發出的請求有錯誤，服務器沒有進行新建或修改數據的操作。',
      401: '請重新登入。',
      403: '用戶得到授權，但是訪問是被禁止的。',
      404: '發出的請求針對的是不存在的記錄，服務器沒有進行操作。',
      406: '請求的格式不可得。',
      410: '請求的資源被永久刪除，且不會再得到的。',
      413: '上傳的檔案總大小太大',
      422: '當創建一個對象時，發生一個驗證錯誤。',
      500: '服務器發生錯誤，請檢查服務器。',
      502: '網關錯誤。',
      503: '服務不可用，服務器暫時過載或維護。',
      504: '網關超時。',
      requestError: '請求錯誤',
      networkAnomalyDescription: '您的網絡發生異常，無法連接服務器',
      networkAnomaly: '網絡異常',
      hint: '提示',
    },
    fileManager: {
      name: '名稱',
      uploadDate: '上傳日期',
      knowledgeBase: '知識庫',
      size: '大小',
      action: '操作',
      addToKnowledge: '鏈接知識庫',
      pleaseSelect: '請選擇',
      newFolder: '新建文件夾',
      uploadFile: '上傳文件',
      parseOnCreation: '創建時解析',
      uploadTitle: '點擊或拖拽文件至此區域即可上傳',
      uploadDescription:
        '支持單次或批量上傳。本地部署的單次上傳檔案總大小上限為 1GB，單次批量上傳檔案數不超過 32，單個帳戶不限檔案數量。對於 demo.ragflow.io，每次上傳的文件總大小限制為 10MB，每個文件不得超過 10MB，且每個帳戶最多可上傳 128 個文件。',
      file: '文件',
      directory: '文件夾',
      local: '本地上傳',
      s3: 'S3 上傳',
      preview: '預覽',
      fileError: '文件錯誤',
      uploadLimit:
        '本地部署的單次上傳檔案總大小上限為 1GB，單次批量上傳檔案數不超過 32，單個帳戶不限檔案數量。',
      destinationFolder: '目標資料夾',
    },
    flow: {
      cite: '引用',
      citeTip: 'citeTip',
      name: '名稱',
      nameMessage: '請輸入名稱',
      description: '描述',
      examples: '範例',
      to: '下一步',
      msg: '訊息',
      messagePlaceholder: '訊息',
      messageMsg: '請輸入訊息或刪除此欄位。',
      addField: '新增字段',
      addMessage: '新增訊息',
      loop: '循環上限',
      loopTip:
        'loop為目前元件循環次數上限，當循環次數超過loop的值時，表示元件無法完成目前任務，請重新最佳化agent',
      yes: '是',
      no: '否',
      key: 'key',
      componentId: '組件ID',
      add: '新增',
      operation: '操作',
      run: '運行',
      save: '儲存',
      title: 'ID：',

      beginDescription: '這是流程開始的地方',
      answerDescription: `該組件用作機器人與人類之間的介面。它接收使用者的輸入並顯示機器人的計算結果。`,
      retrievalDescription: `此元件用於從知識庫中檢索相關資訊。選擇知識庫。如果沒有檢索到任何內容，將傳回「空響應」。`,
      generateDescription: `此元件用於呼叫LLM生成文本，請注意提示的設定。`,
      categorizeDescription: `此組件用於對文字進行分類。請指定類別的名稱、描述和範例。每個類別都指向不同的下游組件。`,
      relevantDescription: `此元件用來判斷upstream的輸出是否與使用者最新的問題相關，『是』代表相關，『否』代表不相關。`,
      rewriteQuestionDescription: `此元件用於細化使用者的提問。通常，當使用者的原始提問無法從知識庫中檢索相關資訊時，此元件可協助您將問題變更為更符合知識庫表達方式的適當問題。`,
      messageDescription:
        '此元件用於向使用者發送靜態訊息。您可以準備幾條訊息，這些訊息將隨機選擇。',
      keywordDescription: `該組件用於從用戶的問題中提取關鍵字。 Top N指定需要提取的關鍵字數量。`,
      switchDescription: `該組件用於根據前面組件的輸出評估條件，並相應地引導執行流程。通過定義各種情況並指定操作，或在不滿足條件時採取默認操作，實現複雜的分支邏輯。`,
      wikipediaDescription: `此元件用於從 https://www.wikipedia.org/ 取得搜尋結果。通常，它作為知識庫的補充。 Top N 指定您需要調整的搜尋結果數。`,
      promptText: `請總結以下段落。注意數字，不要胡編亂造。段落如下：
{input}
以上就是你需要總結的內容。`,
      createGraph: '建立 Agent',
      createFromTemplates: '從模板創建',
      retrieval: '知識檢索',
      generate: '生成回答',
      answer: '對話',
      categorize: '問題分類',
      relevant: '是否相關',
      rewriteQuestion: '問題最佳化',
      begin: '開始',
      message: '靜態訊息',
      blank: '空',
      createFromNothing: '從無到有',
      addItem: '新增',
      addSubItem: '新增子項',
      nameRequiredMsg: '名稱不能為空',
      nameRepeatedMsg: '名稱不能重複',
      keywordExtract: '關鍵字',
      keywordExtractDescription: `該組件用於從用戶的問題中提取關鍵字。 Top N指定需要提取的關鍵字數量。`,
      baidu: '百度',
      baiduDescription: `此組件用於取得www.baidu.com的搜尋結果，一般作為知識庫的補充，Top N指定需要採納的搜尋結果數。`,
      duckDuckGo: 'DuckDuckGo',
      duckDuckGoDescription:
        '此元件用於從 www.duckduckgo.com 取得搜尋結果。通常，它作為知識庫的補充。 Top N 指定您需要採用的搜尋結果數。',
      channel: '頻道',
      channelTip: '針對該組件的輸入進行文字搜尋或新聞搜索',
      text: '文字',
      news: '新聞',
      messageHistoryWindowSize: '歷史訊息視窗大小',
      messageHistoryWindowSizeTip:
        'LLM需要查看的對話記錄的視窗大小。越大越好。但要注意LLM的最大內容長度。',
      wikipedia: '維基百科',
      pubMed: 'PubMed',
      pubMedDescription:
        '此元件用於從 https://pubmed.ncbi.nlm.nih.gov/ 取得搜尋結果。通常，它充當知識庫的補充。 Top N 指定您需要適應的搜尋結果的數量。電子郵件是必填欄位。',
      email: '信箱',
      emailTip:
        '此元件用於從 https://pubmed.ncbi.nlm.nih.gov/ 取得搜尋結果。通常，它充當知識庫的補充。 Top N 指定您需要適應的搜尋結果的數量。電子郵件是必填欄位。',
      arXiv: 'ArXiv',
      arXivDescription:
        '此元件用於從 https://arxiv.org/ 取得搜尋結果。通常，它充當知識庫的補充。 Top N 指定您需要適應的搜尋結果的數量。',
      sortBy: '排序方式',
      submittedDate: '提交日期',
      lastUpdatedDate: '最後更新日期',
      relevance: '關聯',
      google: 'Google',
      googleDescription:
        '此元件用於從https://www.google.com/取得搜尋結果。通常，它作為知識庫的補充。 Top N 和 SerpApi API 金鑰指定您需要調整的搜尋結果數量。',
      bing: 'Bing',
      bingDescription:
        '此元件用於從 https://www.bing.com/ 取得搜尋結果。通常，它充當知識庫的補充。 Top N 和 Bing Subscription-Key 指定您需要適配的搜尋結果數量。',
      apiKey: 'API KEY',
      country: '國家和地區',
      language: '語言',
      googleScholar: '谷歌學術',
      googleScholarDescription: `該元件用於從 https://scholar.google.com/ 取得搜尋結果。通常，它充當知識庫的補充。 Top N 指定您需要調整的搜尋結果的數量。`,
      yearLow: '開始年份',
      yearHigh: '結束年份',
      patents: '專利',
      data: '數據',
      deepL: 'DeepL',
      deepLDescription:
        '此元件用於從 https://www.deepl.com/ 取得翻譯。通常，它提供更專業的翻譯結果。',
      authKey: '授權鍵',
      sourceLang: '原始語言',
      targetLang: '目標語言',
      gitHub: 'GitHub',
      gitHubDescription:
        '此元件用於從 https://github.com/ 搜尋儲存庫。 Top N 指定要調整的搜尋結果的數量。',
      baiduFanyi: '百度翻譯',
      baiduFanyiDescription:
        '此組件用於從https://fanyi.baidu.com/取得翻譯。通常，它提供更專業的翻譯結果',
      appid: 'App id',
      secretKey: '秘鑰',
      domain: '領域',
      transType: '翻譯類型',
      baiduSecretKeyOptions: {
        translate: '一般翻譯',
        fieldtranslate: '領域翻譯',
      },
      baiduDomainOptions: {
        it: '資訊科技領域',
        finance: '金融財經領域',
        machinery: '機械製造領域',
        senimed: '生物醫藥領域',
        novel: '網路文學領域',
        academic: '學術論文領域',
        aerospace: '航空航太領域',
        wiki: '人文社科領域',
        news: '新聞資訊領域',
        law: '法律法規領域',
        contract: '合約領域',
      },
      baiduSourceLangOptions: {
        auto: '自動偵測',
        zh: '中文',
        en: '英語',
        yue: '粵語',
        wyw: '文言文',
        jp: '日文',
        kor: '韓文',
        fra: '法文',
        spa: '西班牙文',
        th: '泰語',
        ara: '阿拉伯語',
        ru: '俄文',
        pt: '葡萄牙語',
        de: '德語',
        it: '義大利語',
        el: '希臘文',
        nl: '荷蘭語',
        pl: '波蘭語',
        bul: '保加利亞語',
        est: '愛沙尼亞語',
        dan: '丹麥語',
        fin: '芬蘭語',
        cs: '捷克語',
        rom: '羅馬尼亞語',
        slo: '斯洛維尼亞語',
        swe: '瑞典語',
        hu: '匈牙利語',
        cht: '繁體中文',
        vie: '越南語',
      },
      qWeather: '和風天氣',
      qWeatherDescription:
        '此元件用於從 https://www.qweather.com/ 取得天氣相關資訊。您可以獲得天氣、指數、空氣品質。',
      lang: '語言',
      type: '類型',
      webApiKey: 'Web API 密鑰',
      userType: '使用者類型',
      timePeriod: '時間段',
      qWeatherLangOptions: {
        zh: '簡體中文',
        'zh-hant': '繁體中文',
        en: '英文',
        de: '德語',
        es: '西班牙語',
        fr: '法文',
        it: '義大利語',
        ja: '日文',
        ko: '韓語',
        ru: '俄文',
        hi: '印地語',
        th: '泰語',
        ar: '阿拉伯語',
        pt: '葡萄牙語',
        bn: '孟加拉語',
        ms: '馬來語',
        nl: '荷蘭語',
        el: '希臘文',
        la: '拉丁文',
        sv: '瑞典語',
        id: '印尼語',
        pl: '波蘭語',
        tr: '土耳其語',
        cs: '捷克語',
        et: '愛沙尼亞語',
        vi: '越南語',
        fil: '菲律賓語',
        fi: '芬蘭語',
        he: '希伯來文',
        is: '冰島語',
        nb: '挪威語',
      },
      qWeatherTypeOptions: {
        weather: '天氣預報',
        indices: '天氣生活指數',
        airquality: '空氣品質',
      },
      qWeatherUserTypeOptions: {
        free: '免費訂閱用戶',
        paid: '付費訂閱用戶',
      },
      qWeatherTimePeriodOptions: {
        now: '現在',
        '3d': '3天',
        '7d': '7天',
        '10d': '10天',
        '15d': '12天',
        '30d': '30天',
      },
      publish: 'API',
      exeSQL: 'ExeSQL',
      exeSQLDescription:
        '此元件透過SQL語句從對應的關聯式資料庫中查詢結果。支援 MySQL、PostgreSQL、MariaDB。 ',
      dbType: '資料庫類型',
      database: '資料庫',
      username: '使用者名稱',
      host: '主機',
      port: '端口',
      password: '密碼',
      switch: '條件',
      logicalOperator: '操作符',
      switchOperatorOptions: {
        equal: '等於',
        notEqual: '不等於',
        gt: '大於',
        ge: '大於等於',
        lt: '小於',
        le: '小於等於',
        contains: '包含',
        notContains: '不包含',
        startWith: '開始是',
        endWith: '結束是',
        empty: '為空',
        notEmpty: '不為空',
      },
      switchLogicOperatorOptions: {
        and: '與',
        or: '或',
      },
      operator: '操作符',
      value: '值',
      useTemplate: '使用該模板',
      wenCai: '問財',
      queryType: '查詢類型',
      wenCaiDescription:
        '該組件可用於獲取廣泛的金融領域的o息，包括但不限於股票、基金等...',
      wenCaiQueryTypeOptions: {
        stock: '股票',
        zhishu: '指數',
        fund: '基金',
        hkstock: '港股',
        usstock: '美股',
        threeboard: '新三板',
        conbond: '可轉債',
        insurance: '保險',
        futures: '期貨',
        lccp: '理財',
        foreign_exchange: '外匯',
      },
      akShare: 'AkShare',
      akShareDescription: '此組件可用於從東方財富網取得對應股票的新聞資訊。',
      yahooFinance: '雅虎財經',
      yahooFinanceDescription: '該組件根據提供的股票代碼查詢有關公司的資訊。',
      crawler: '網頁爬蟲',
      crawlerDescription: '該組件可用於從指定url爬取HTML源碼。',
      proxy: '代理',
      crawlerResultOptions: {
        html: 'Html',
        markdown: 'Markdown',
        content: '文本',
      },
      extractType: '提取類型',
      info: '訊息',
      history: '歷史',
      financials: '財務',
      balanceSheet: '資產負債表',
      cashFlowStatement: '現金流量表',
      jin10: '金十',
      jin10Description:
        '此組件可用於從金十開放平台獲取金融領域的信息，包括快訊、日曆、行情、參考。 ',
      flashType: '閃光類型',
      filter: '篩選',
      contain: '包含',
      calendarType: '日曆類型',
      calendarDatashape: '日曆資料形狀',
      symbolsDatatype: '符號資料型別',
      symbolsType: '符號類型',
      jin10TypeOptions: {
        flash: '快訊',
        calendar: '日曆',
        symbols: '行情',
        news: '參考',
      },
      jin10FlashTypeOptions: {
        '1': '市場快訊',
        '2': '期貨快訊',
        '3': '美港快訊',
        '4': 'A股快訊',
        '5': '商品外匯快訊',
      },
      jin10CalendarTypeOptions: {
        cj: '宏觀資料日曆',
        qh: '期貨日曆',
        hk: '港股日曆',
        us: '美股日曆',
      },
      jin10CalendarDatashapeOptions: {
        data: '資料',
        event: ' 事件',
        holiday: '假期',
      },
      jin10SymbolsTypeOptions: {
        GOODS: '商品行情',
        FOREX: '外匯行情',
        FUTURE: '國際行情',
        CRYPTO: '加密貨幣行情',
      },
      jin10SymbolsDatatypeOptions: {
        symbols: '品種列表',
        quotes: '最新行情',
      },
      concentrator: '集線器',
      concentratorDescription:
        '此組件可用於連接多個下游組件。它接收來自上游組件的輸入並將其傳遞給每個下游組件。 ',
      tuShare: 'TuShare',
      tuShareDescription:
        '該組件可用於從主流金融網站獲取金融新聞簡報，輔助行業和量化研究。 ',
      tuShareSrcOptions: {
        sina: '新浪財經',
        wallstreetcn: '華爾街見聞',
        '10jqka': '同花順',
        eastmoney: '東方財富',
        yuncaijing: '雲財經',
        fenghuang: '鳳凰新聞',
        jinrongjie: '金融界',
      },
      token: 'Token',
      src: '來源',
      startDate: '開始日期',
      endDate: '結束日期',
      keyword: '關鍵字',
      note: '註解',
      noteDescription: '註解',
      notePlaceholder: '請輸入註釋',
      invoke: 'Invoke',
      invokeDescription:
        '此元件可以呼叫遠端端點呼叫。將其他元件的輸出作為參數或設定常數參數來呼叫遠端函數。',
      url: '網址',
      method: '方法',
      timeout: '超時',
      headers: '請求頭',
      cleanHtml: '清除 HTML',
      cleanHtmlTip: '如果回應是 HTML 格式並且只需要主要內容，請將其開啟。',
      reference: '引用',
      input: '輸入',
      output: '輸出',
      parameter: '參數',
      howUseId: '如何使用Agent ID？',
      content: '內容',
      operationResults: '運行結果',
      autosaved: '已自動儲存',
      optional: '可選項',
      pasteFileLink: '貼上文件連結',
      testRun: '試運行',
      template: '模板轉換',
      templateDescription:
        '此元件用於排版各種元件的輸出。1、支持Jinja2模板，會先將輸入轉為對象後進行模板渲染2、同時保留原使用{參數}字符串替換的方式',
      jsonUploadTypeErrorMessage: '請上傳json檔',
      jsonUploadContentErrorMessage: 'json 檔案錯誤',
      iterationDescription: `此元件首先透過「分隔符號」將輸入拆分為陣列。
對數組中的元素依序執行相同的操作步驟，直到輸出所有結果，可以理解為任務批次處理器。

例如，在長文本翻譯迭代節點內，如果所有內容都輸入到LLM節點，則可能會達到單次對話限制。上游節點可以先將長文本拆分為多個分片，並配合迭代節點對每個分片進行批次翻譯，避免達到單次對話的LLM訊息限制。`,
      delimiterTip: `此分隔符號用於將輸入文字分割成多個文字片段，其中的回顯將作為每次迭代的輸入項執行。`,
      delimiterOptions: {
        comma: '逗號',
        lineBreak: '換行',
        tab: '製表符',
        underline: '底線',
        diagonal: '斜線',
        minus: '連字符',
        semicolon: '分號',
      },
      addVariable: '新增變數',
      variableSettings: '變數設定',
      systemPrompt: '系統提示詞',
      addCategory: '新增分類',
      categoryName: '分類名稱',
      nextStep: '下一步',
      insertVariableTip: `輸入 / 插入變數`,
    },
    footer: {
      profile: '“保留所有權利 @ react”',
    },
    layout: {
      file: '文件',
      knowledge: '知識',
      chat: '聊天',
    },
  },
};
