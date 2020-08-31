import {
    SET_NEWSLETTERS
} from './types';

export function fetchNewsletters() {

    const response = {
        data: [
            {
                _id: '115',
                title: 'Happy Holiday Fam',
                body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258' 
            },
            {
                _id: '935',
                title: 'Second Holiday Fam',
                body: 'bubu yoooooo wuayyyyyy ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258' 
            }
        ]
    }

    return {
        type: SET_NEWSLETTERS,
        payload: response.data
    }
}