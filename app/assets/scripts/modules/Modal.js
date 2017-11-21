import $ from 'jquery'

class Modal {
  constructor(){
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events(){
    //click the open modal openModalButton
    this.openModalButton.click(this.openModal.bind(this));

    //clicking the x close modal openModalButton
    this.closeModalButton.click(this.closeModal.bind(this));
    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e){
    if(e.keycode == 27){
      this.closeModal();
    }

  }

  openModal(){
    console.log("button pressed");
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal(){
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
