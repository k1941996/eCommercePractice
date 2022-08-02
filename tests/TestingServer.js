const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
const expect = chai.expect

chai.use(chaiHttp)

describe('Make sure that status is 200', () => {
  it('should return 200', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('object')
        if (err) {
          console.log(err)
        }
        done()
      })
  })
})
