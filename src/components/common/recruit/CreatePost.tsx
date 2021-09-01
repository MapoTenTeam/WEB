import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useInput } from '../../../hooks';

const CreatePost: FC = () => {
  const [recruitTitle, onChangeRecruitTitle] = useInput('');
  const [recruitOccupation, onChangeRecruitOccupation] = useInput('');
  const [recruitNumber, onChangeRecruitNumber] = useInput('');
  const [jobDetail, setJobDetail] = useState<string>('');
  const [eduBackground, onChangeEduBackground] = useInput('');
  const [career, onChangeCareer] = useInput('');

  const onChangeJobDetail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setJobDetail(value);
  };

  const onSubmitRecruitment = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log(recruitTitle);
      console.log(recruitOccupation);
      console.log(recruitNumber);
      console.log(jobDetail);
      console.log(eduBackground);
      console.log(career);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitRecruitment}>
        <div>
          <div className="mb-8">
            <h5 className="font-bold text-xl">구인사항</h5>
          </div>
          <div className="form-group">
            <label className="label-recruit">채용제목</label>
            <div>
              <input
                className="input-recruit"
                placeholder="aaaaaaa"
                value={recruitTitle}
                onChange={onChangeRecruitTitle}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="label-recruit">모집직종</label>
            <div>
              <input
                className="input-recruit"
                placeholder="aaaaaaa"
                value={recruitOccupation}
                onChange={onChangeRecruitOccupation}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="label-recruit">모집인원</label>
            <div>
              <input
                className="input-recruit"
                placeholder="aaaaaaa"
                value={recruitNumber}
                onChange={onChangeRecruitNumber}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="label-recruit">직무내용</label>
            <div>
              <textarea
                className="textarea-recruit"
                placeholder="aaaaaaa"
                value={jobDetail}
                onChange={onChangeJobDetail}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="label-recruit">학력</label>
            <div className="my-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  value="고졸"
                  checked={eduBackground === '고졸'}
                  onChange={onChangeEduBackground}
                />
                <span className="mx-1">고졸</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  value="대졸"
                  checked={eduBackground === '대졸'}
                  onChange={onChangeEduBackground}
                />
                <span className="mx-1">대졸</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  value="대학원졸"
                  checked={eduBackground === '대학원졸'}
                  onChange={onChangeEduBackground}
                />
                <span className="mx-1">대학원졸</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  value="관계없음"
                  checked={eduBackground === '관계없음'}
                  onChange={onChangeEduBackground}
                />
                <span className="mx-1">관계없음</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="label-recruit">경력</label>
            <div className="my-1 flex flex-wrap flex-row">
              <div className="">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    value="신입"
                    checked={career === '신입'}
                    onChange={onChangeCareer}
                  />
                  <span className="mx-1">신입</span>
                </label>
              </div>
              <div className="">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    value="경력"
                    checked={career === '경력'}
                    onChange={onChangeCareer}
                  />
                  <span className="mx-1">경력</span>
                </label>
              </div>
              <div className="">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    value="관계없음"
                    checked={career === '관계없음'}
                    onChange={onChangeCareer}
                  />
                  <span className="mx-1">관계없음</span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="label-recruit">경력 기간</label>
              <div>
                <input className="input-recruit" placeholder="1년" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h5 className="font-bold text-xl">근로조건</h5>
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h5 className="font-bold text-xl">전형사항</h5>
          </div>
        </div>
        <div className="pt-4 pb-20 lg:pt-4 lg:pb-4 my-4 bottom-0 left-0 right-0 z-0">
          <div className="flex flex-wrap flex-row">
            <button className="flex-auto w-auto mr-1 btn btn-lg-three text-white bg-gray-300 shadow-xl">
              임시저장
            </button>
            <button
              type="submit"
              className="flex-auto btn btn-lg-two w-auto text-white shadow-xl"
            >
              승인요청하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
