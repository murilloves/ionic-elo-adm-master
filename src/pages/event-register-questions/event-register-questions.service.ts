import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../environment/environment';
import { Platform } from 'ionic-angular';

@Injectable()
export class QuestionsService {

    constructor(
        private http: HttpClient,
        private _platform: Platform
    ) {}

    getQuestions(): Observable < Object > {
        return this.http
            .get(`${API.baseDev}/questions`);
    }

    getQuestionById(id): Observable < Object > {
        return this.http
            .get(`${API.baseDev}/questions/${id}`);
    }

    addQuestion(data) {
        return this.http
            .post(`${API.baseDev}/questions/`, data);
    }

    getQuestionsHardCode(): Observable < Object > {
        return this.http
            .get(`${API.dev}/questions.json`);
    }
}
