import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { QuestionComponent } from './question.component';
import {By} from '@angular/platform-browser';
import {AppComponent} from '../../app.component';
import {DataService} from '../../data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  let html: DebugElement;
  let service: Partial<DataService>;
  const defaultData: any = {
      questionId: 1,
      principle: 'test',
      realPrinciple: 'test',
      options: [{
        optionId: 1,
        content: 'test'
      },
        {optionId: 2,
          content: 'test'
        }],
      correctId: 1,
      historyCorrectNum: 0,
      historyAnswerNum: 0
    };
  const second: any = {
    questionId: 2,
    principle: 'shitcode type two: Mix variable/functions naming style',
    realPrinciple: 'coding rule two: Maintain consistency in variable/functions naming style',
    options: [{
      optionId: 1,
      content: 'let windowWidth = 640;\nlet windowHeight = 480;'
    },
      {optionId: 2,
        content: 'let wWidth = 640;\nlet w_height = 480;'
      }],
    correctId: 2,
    historyCorrectNum: 0,
    historyAnswerNum: 0
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [ QuestionComponent ],
      providers : [AppComponent, { provide: DataService}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    service = TestBed.inject(DataService);
    component = fixture.componentInstance;
    html = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should load default data', () => {
    expect(component.data).toEqual(defaultData);
  });

  it('after confirming, real principle should appear', fakeAsync(() => {
    const left: any = html.query(By.css('#left'));
    left.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    const confirm: any = html.query(By.css('#confirm'));
    confirm.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(html.query(
      By.css('.realPrinciple')
    ).nativeElement.textContent)
      .toContain(defaultData.realPrinciple);
  }));

  it('click confirm and click again, should load the next question', fakeAsync( () => {
    const left: any = html.query(By.css('#left'));
    left.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    const confirm: any = html.query(By.css('#confirm'));
    confirm.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    spyOn(component, 'loadQuestion');
    confirm.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.loadQuestion).toHaveBeenCalled();
  }));


});
