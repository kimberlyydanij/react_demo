const BoardWrite = () => {
  const [inputs, setInputs] = useState({
    writer: '',
    email: '',
    subject: '',
    content: '',
    filename: numm,
  });

  const { writer, email, subject, content, filename } = inputs;
  const handleValueCahnge = () => {};
  const onSubmit = () => {};

  /////////////////////////////////////////////////////////////

  return (
    <>
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td width='20%' align='center'>
                글쓴이
              </td>
              <td>
                <input
                  type='text'
                  name='writer'
                  size='10'
                  maxLength='10'
                  value={writer}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <td width='20%' align='center'>
                Email
              </td>
              <td>
                <input
                  type='text'
                  name='email'
                  size='30'
                  maxLength='30'
                  value={email}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <td width='20%' align='center'>
                제목
              </td>
              <td>
                <input
                  type='text'
                  name='subject'
                  size='40'
                  value={subject}
                  placeholder={num !== undefined ? '답변' : null}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <td width='20%' align='center'>
                내용
              </td>
              <td>
                <textarea
                  name='content'
                  rows='13'
                  cols='40'
                  value={content}
                  onChange={handleValueChange}
                ></textarea>
              </td>
            </tr>

            <tr>
              <td width='20%' align='center'>
                첨부파일
              </td>
              <td>
                <input
                  type='file'
                  name='filename'
                  id='filepath'
                  onChange={handleFileChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Link className='btn btn-primary' to={`/board/list/${currentPage}`}>
          리스트
        </Link>
        <input type='submit' className='btn btn-primary' value='등록' />
      </form>
    </>
  );
};

export default BoardWrite;
